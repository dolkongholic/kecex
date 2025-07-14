import { NextResponse } from "next/server";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import prisma from "@/app/libs/prisma";
import { existsSync } from "fs";

// 허용된 파일 타입 정의 (이미지 형식 확장)
const ALLOWED_FILE_TYPES = [
  'image/jpeg',
  'image/jpg', 
  'image/png',
  'image/gif',
  'image/webp',
  'image/bmp',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'text/plain',
  'application/zip',
  'application/x-zip-compressed'
];

// 최대 파일 크기 (10MB)
const MAX_FILE_SIZE = 10 * 1024 * 1024;

export async function POST(req: Request) {
  try {
    console.log("[UPLOAD] 업로드 요청 시작");
    
    // FormData 파싱
    const formData = await req.formData();

    // 텍스트 필드 추출
    const text = formData.get("text")?.toString() || "";
    const date = formData.get("date")?.toString() || "";
    const post_text = formData.get("post_text")?.toString() || "";

    console.log("[UPLOAD] 폼 데이터 파싱 완료", { title: text, date, contentLength: post_text.length });

    // 다중 파일 추출 (input name="files")
    const files = formData.getAll("files") as File[];
    
    console.log("[UPLOAD] 파일 추출 완료", { fileCount: files.length, fileNames: files.map(f => f.name) });

    // 파일 유효성 검사
    for (const file of files) {
      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        console.log("[UPLOAD] 지원하지 않는 파일 형식:", file.name, file.type);
        return NextResponse.json(
          { message: `지원하지 않는 파일 형식입니다: ${file.name}` },
          { status: 400 }
        );
      }
      if (file.size > MAX_FILE_SIZE) {
        console.log("[UPLOAD] 파일 크기 초과:", file.name, file.size);
        return NextResponse.json(
          { message: `파일 크기가 너무 큽니다 (최대 10MB): ${file.name}` },
          { status: 400 }
        );
      }
    }

    // 업로드 폴더 준비 - 배포 환경 대응
    const uploadDir = process.env.NODE_ENV === 'production' 
      ? '/tmp/uploads' 
      : path.join(process.cwd(), "public/uploads");
    
    console.log("[UPLOAD] 업로드 디렉토리:", uploadDir);
    console.log("[UPLOAD] 환경:", process.env.NODE_ENV);
    console.log("[UPLOAD] 현재 작업 디렉토리:", process.cwd());
    
    try {
      if (!existsSync(uploadDir)) {
        await mkdir(uploadDir, { recursive: true });
        console.log("[UPLOAD] 디렉토리 생성 완료:", uploadDir);
      }
      
      // 쓰기 권한 테스트
      const testFile = path.join(uploadDir, 'test-write.tmp');
      await writeFile(testFile, 'test');
      await import('fs/promises').then(fs => fs.unlink(testFile));
      console.log("[UPLOAD] 쓰기 권한 확인 완료");
      
    } catch (error) {
      console.error("[UPLOAD] 디렉토리 준비 실패:", error);
      console.error("[UPLOAD] 에러 상세:", {
        message: error instanceof Error ? error.message : String(error),
        code: error instanceof Error && 'code' in error ? error.code : undefined,
        errno: error instanceof Error && 'errno' in error ? error.errno : undefined,
        path: error instanceof Error && 'path' in error ? error.path : undefined
      });
      
      return NextResponse.json(
        { 
          message: "업로드 디렉토리 준비 실패", 
          error: String(error),
          uploadDir: uploadDir,
          cwd: process.cwd(),
          nodeEnv: process.env.NODE_ENV
        },
        { status: 500 }
      );
    }

    // 각 파일 저장 후 브라우저 접근 경로 배열 구성
    const savedFiles: string[] = [];
    const uploadErrors: string[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      
      try {
        console.log(`[UPLOAD] 파일 ${i+1}/${files.length} 처리 시작:`, file.name);
        
        if (!file || file.size === 0) {
          uploadErrors.push(`${file?.name || '알 수 없는 파일'}: 빈 파일입니다.`);
          continue;
        }

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        
        // 파일명을 더 안전하게 처리 (한글 및 특수문자 처리 개선)
        const originalName = file.name;
        
        // 파일 확장자 추출
        const lastDotIndex = originalName.lastIndexOf('.');
        const name = lastDotIndex > 0 ? originalName.substring(0, lastDotIndex) : originalName;
        const extension = lastDotIndex > 0 ? originalName.substring(lastDotIndex) : '';
        
        // 한글과 특수문자를 안전하게 처리
        const safeName = name
          .replace(/[<>:"/\\|?*\x00-\x1F]/g, '_')  // 시스템 예약 문자 제거
          .replace(/\s+/g, '_')  // 공백을 언더스코어로 변경
          .substring(0, 100);  // 파일명 길이 제한
        
        const timestamp = Date.now() + i; // 동일 시간에 업로드되는 파일들 구분을 위해 인덱스 추가
        const fileName = `${timestamp}_${safeName}${extension}`;
        const filePath = path.join(uploadDir, fileName);
        
        console.log(`[UPLOAD] 파일 저장 경로:`, filePath);
        
        // 파일 저장
        await writeFile(filePath, buffer);
        
        // 파일이 실제로 저장되었는지 확인
        if (!existsSync(filePath)) {
          throw new Error(`파일 저장 실패: ${filePath}`);
        }
        
        // 저장된 파일 크기 확인
        const stats = await import('fs/promises').then(fs => fs.stat(filePath));
        if (stats.size !== buffer.length) {
          throw new Error(`파일 크기 불일치: 예상 ${buffer.length}, 실제 ${stats.size}`);
        }
        
        console.log(`[UPLOAD] 파일 저장 성공:`, fileName, `(${stats.size} bytes)`);
        
        // 파일 URL 생성 (모든 환경에서 API 라우트 사용)
        const fileUrl = `/api/uploads/${fileName}`;
        savedFiles.push(fileUrl);
        
      } catch (error) {
        console.error(`[UPLOAD] 파일 ${file.name} 업로드 실패:`, error);
        uploadErrors.push(`${file.name}: ${error instanceof Error ? error.message : String(error)}`);
      }
    }

    console.log("[UPLOAD] 모든 파일 처리 완료", { successCount: savedFiles.length, errorCount: uploadErrors.length });

    // 업로드된 파일이 하나도 없는 경우
    if (savedFiles.length === 0 && files.length > 0) {
      console.log("[UPLOAD] 모든 파일 업로드 실패");
      return NextResponse.json(
        { message: "모든 파일 업로드 실패", errors: uploadErrors },
        { status: 500 }
      );
    }

    console.log("[UPLOAD] DB 저장 시작");

    try {
      // DB에 저장 (파일 배열을 JSON 문자열로 저장)
      const result = await prisma.notice.create({
        data: {
          title: text,
          content: post_text,
          date: date,
          file: JSON.stringify(savedFiles),
        },
      });

      console.log(`[UPLOAD] DB 저장 성공: ID ${result.id}, 파일 수: ${savedFiles.length}`);

      // 일부 파일만 업로드 성공한 경우 경고 메시지 포함
      if (uploadErrors.length > 0) {
        return NextResponse.json({
          ...result,
          warning: "일부 파일 업로드 실패",
          errors: uploadErrors,
          successCount: savedFiles.length,
          failureCount: uploadErrors.length
        });
      }

      return NextResponse.json({
        ...result,
        successCount: savedFiles.length
      });
      
          } catch (dbError) {
        console.error("[UPLOAD] DB 저장 실패:", dbError);
        
        // DB 저장 실패 시 저장된 파일들 삭제 (롤백)
        console.log(`[UPLOAD] 롤백 시작: ${savedFiles.length}개 파일 삭제`);
        for (const fileUrl of savedFiles) {
          try {
            const fileName = fileUrl.split('/').pop();
            if (fileName) {
              // 동일한 uploadDir 사용
              const filePath = path.join(uploadDir, fileName);
              if (existsSync(filePath)) {
                await import('fs/promises').then(fs => fs.unlink(filePath));
                console.log(`[UPLOAD] 롤백: 파일 삭제 완료 ${fileName}`);
              } else {
                console.log(`[UPLOAD] 롤백: 파일 없음 ${fileName}`);
              }
            }
          } catch (cleanupError) {
            console.error(`[UPLOAD] 롤백 실패:`, cleanupError);
          }
        }
      
      return NextResponse.json(
        { 
          message: "공지사항 저장 실패", 
          error: dbError instanceof Error ? dbError.message : String(dbError),
          rollbackCompleted: true
        },
        { status: 500 }
      );
    }
    
  } catch (error) {
    console.error("[UPLOAD] 전체 요청 실패:", error);
    return NextResponse.json(
      { message: "업로드 실패", error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
