import { NextResponse } from "next/server";
import prisma from "@/app/libs/prisma";
import { existsSync } from "fs";
import path from "path";

// 파일 저장 경로 설정
const getUploadDir = () => {
  if (process.env.NODE_ENV === 'production') {
    return '/tmp/uploads';
  }
  return path.join(process.cwd(), "public/uploads");
};

export async function POST(req: Request) {
  try {
    const { action } = await req.json();
    
    if (action !== 'verify' && action !== 'cleanup') {
      return NextResponse.json(
        { message: "Invalid action. Use 'verify' or 'cleanup'" },
        { status: 400 }
      );
    }

    console.log(`[CLEANUP] ${action} 작업 시작`);
    console.log(`[CLEANUP] 환경: ${process.env.NODE_ENV}`);
    console.log(`[CLEANUP] 업로드 디렉토리: ${getUploadDir()}`);

    const uploadDir = getUploadDir();
    const notices = await prisma.notice.findMany();
    
    const results = {
      totalNotices: notices.length,
      totalFiles: 0,
      existingFiles: 0,
      missingFiles: 0,
      invalidData: 0,
      cleanedNotices: 0,
      errors: [] as string[]
    };

    const missingFilesList: { noticeId: number, title: string, missingFiles: string[] }[] = [];
    const cleanupPromises: Promise<any>[] = [];

    for (const notice of notices) {
      if (!notice.file) {
        results.invalidData++;
        continue;
      }

      let files: string[] = [];
      
      try {
        const parsed = JSON.parse(notice.file);
        if (Array.isArray(parsed)) {
          files = parsed;
        } else if (typeof parsed === 'string') {
          files = parsed.split(',').map(f => f.trim()).filter(Boolean);
        } else {
          results.invalidData++;
          continue;
        }
      } catch (error) {
        console.error(`[CLEANUP] JSON 파싱 실패 (Notice ID: ${notice.id}):`, error);
        results.invalidData++;
        continue;
      }

      const validFiles: string[] = [];
      const missingFiles: string[] = [];

      for (const fileUrl of files) {
        if (!fileUrl) continue;
        
        results.totalFiles++;
        
        // 파일명 추출
        let fileName = '';
        if (fileUrl.startsWith('/api/uploads/')) {
          fileName = fileUrl.replace('/api/uploads/', '');
        } else if (fileUrl.startsWith('/uploads/')) {
          fileName = fileUrl.replace('/uploads/', '');
        } else if (fileUrl.includes('/')) {
          fileName = fileUrl.split('/').pop() || '';
        } else {
          fileName = fileUrl;
        }

        if (!fileName) continue;

        // 다양한 경로에서 파일 찾기
        const possiblePaths = [
          path.join(uploadDir, fileName),
          path.join(uploadDir, fileName.replace(/^\d+_/, '')),
          path.join(process.cwd(), "public/uploads", fileName),
          path.join(process.cwd(), "uploads", fileName),
          path.join(process.cwd(), "public", fileName)
        ];

        let fileExists = false;
        for (const filePath of possiblePaths) {
          if (existsSync(filePath)) {
            fileExists = true;
            results.existingFiles++;
            validFiles.push(fileUrl);
            console.log(`[CLEANUP] 파일 발견: ${filePath}`);
            break;
          }
        }

        if (!fileExists) {
          results.missingFiles++;
          missingFiles.push(fileUrl);
          console.log(`[CLEANUP] 파일 누락: ${fileName}`);
        }
      }

      if (missingFiles.length > 0) {
        missingFilesList.push({
          noticeId: notice.id,
          title: notice.title,
          missingFiles: missingFiles
        });
      }

      // cleanup 액션인 경우 유효한 파일만 남기고 DB 업데이트
      if (action === 'cleanup' && missingFiles.length > 0) {
        const updatePromise = prisma.notice.update({
          where: { id: notice.id },
          data: { file: JSON.stringify(validFiles) }
        });
        cleanupPromises.push(updatePromise);
        results.cleanedNotices++;
      }
    }

    // cleanup 액션인 경우 DB 업데이트 실행
    if (action === 'cleanup' && cleanupPromises.length > 0) {
      try {
        await Promise.all(cleanupPromises);
        console.log(`[CLEANUP] ${results.cleanedNotices}개 공지사항 정리 완료`);
      } catch (error) {
        console.error('[CLEANUP] DB 업데이트 실패:', error);
        results.errors.push(`DB 업데이트 실패: ${error instanceof Error ? error.message : String(error)}`);
      }
    }

    // 업로드 디렉토리 내용 확인
    let uploadDirContents: string[] = [];
    try {
      if (existsSync(uploadDir)) {
        const { readdir } = await import('fs/promises');
        uploadDirContents = await readdir(uploadDir);
        console.log(`[CLEANUP] 업로드 디렉토리 파일 수: ${uploadDirContents.length}`);
      } else {
        console.log(`[CLEANUP] 업로드 디렉토리가 존재하지 않음: ${uploadDir}`);
      }
    } catch (error) {
      console.error('[CLEANUP] 디렉토리 읽기 실패:', error);
    }

    console.log(`[CLEANUP] ${action} 작업 완료:`, results);

    return NextResponse.json({
      action,
      results,
      missingFilesList,
      uploadDirContents: uploadDirContents.slice(0, 20), // 처음 20개만 반환
      uploadDir,
      environment: process.env.NODE_ENV
    });

  } catch (error) {
    console.error('[CLEANUP] 전체 작업 실패:', error);
    return NextResponse.json(
      { 
        message: "파일 정리 작업 실패", 
        error: error instanceof Error ? error.message : String(error) 
      },
      { status: 500 }
    );
  }
} 