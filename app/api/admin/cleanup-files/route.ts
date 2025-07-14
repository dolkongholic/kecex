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
      try {
        if (!notice.file) continue;

        let files: string[] = [];
        
        // 파일 데이터 파싱
        try {
          const parsed = JSON.parse(notice.file);
          if (Array.isArray(parsed)) {
            files = parsed;
          } else if (typeof parsed === 'string') {
            files = parsed.split(',');
          } else {
            results.invalidData++;
            continue;
          }
        } catch (error) {
          // JSON 파싱 실패 시 문자열로 처리
          if (typeof notice.file === 'string') {
            files = notice.file.split(',');
          } else {
            results.invalidData++;
            continue;
          }
        }

        const missingFiles: string[] = [];
        const validFiles: string[] = [];

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
              break;
            }
          }

          if (!fileExists) {
            results.missingFiles++;
            missingFiles.push(fileUrl);
          }
        }

        // 누락된 파일이 있는 경우
        if (missingFiles.length > 0) {
          missingFilesList.push({
            noticeId: notice.id,
            title: notice.title,
            missingFiles
          });

          // cleanup 모드일 때 유효한 파일만 남기고 업데이트
          if (action === 'cleanup') {
            cleanupPromises.push(
              prisma.notice.update({
                where: { id: notice.id },
                data: { file: JSON.stringify(validFiles) }
              })
            );
            results.cleanedNotices++;
          }
        }

      } catch (error) {
        results.errors.push(`Notice ID ${notice.id}: ${error instanceof Error ? error.message : String(error)}`);
      }
    }

    // cleanup 실행
    if (action === 'cleanup' && cleanupPromises.length > 0) {
      await Promise.all(cleanupPromises);
    }

    return NextResponse.json({
      action,
      results,
      missingFilesList: action === 'verify' ? missingFilesList : undefined,
      message: action === 'verify' 
        ? `검증 완료: ${results.missingFiles}개의 누락된 파일 발견`
        : `정리 완료: ${results.cleanedNotices}개의 공지사항에서 누락된 파일 제거`
    });

  } catch (error) {
    console.error("파일 정리 오류:", error);
    return NextResponse.json(
      { message: "파일 정리 실패", error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
} 