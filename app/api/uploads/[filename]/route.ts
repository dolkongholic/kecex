import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";
import { existsSync } from "fs";

export async function GET(
  request: Request,
  { params }: { params: { filename: string } }
) {
  try {
    // URL 디코딩 처리 (한글 파일명 지원)
    const filename = decodeURIComponent(params.filename);
    
    console.log(`[FILE ACCESS] 파일 요청: ${filename}`);
    console.log(`[FILE ACCESS] 환경: ${process.env.NODE_ENV}`);
    console.log(`[FILE ACCESS] 현재 작업 디렉토리: ${process.cwd()}`);
    
    // 기존 파일들을 찾기 위한 다양한 경로 시도
    const possiblePaths = [
      // 프로덕션 환경 우선 경로
      process.env.NODE_ENV === 'production' 
        ? path.join('/tmp/uploads', filename)
        : path.join(process.cwd(), "public/uploads", filename),
      
      // 개발 환경 경로
      path.join(process.cwd(), "public/uploads", filename),
      
      // 호환성을 위한 추가 경로들
      path.join(process.cwd(), "uploads", filename),
      path.join(process.cwd(), "public", filename),
      
      // 타임스탬프가 없는 기존 파일들 (호환성)
      path.join(process.cwd(), "public/uploads", filename.replace(/^\d+_/, '')),
      
      // 루트 디렉토리 접근
      path.join(process.cwd(), filename)
    ];

    console.log(`[FILE ACCESS] 검색할 경로들:`, possiblePaths);

    let file: Buffer | null = null;
    let foundPath = '';

    // 각 경로에서 파일 찾기 시도
    for (const filePath of possiblePaths) {
      try {
        if (existsSync(filePath)) {
          console.log(`[FILE ACCESS] 파일 존재 확인: ${filePath}`);
          file = await readFile(filePath);
          foundPath = filePath;
          console.log(`[FILE ACCESS] 파일 읽기 성공: ${foundPath} (크기: ${file.length} bytes)`);
          break;
        } else {
          console.log(`[FILE ACCESS] 파일 없음: ${filePath}`);
        }
      } catch (error) {
        console.log(`[FILE ACCESS] 파일 읽기 실패: ${filePath}`, error);
        continue;
      }
    }

    // 모든 경로에서 파일을 찾지 못한 경우
    if (!file) {
      console.error(`[FILE ACCESS] 파일을 찾을 수 없음: ${filename}`);
      console.error(`[FILE ACCESS] 시도한 경로:`, possiblePaths);
      
      // 업로드 디렉토리 내용 확인 (디버깅용)
      try {
        const uploadDir = process.env.NODE_ENV === 'production' 
          ? '/tmp/uploads' 
          : path.join(process.cwd(), "public/uploads");
        
        if (existsSync(uploadDir)) {
          const { readdir } = await import('fs/promises');
          const files = await readdir(uploadDir);
          console.log(`[FILE ACCESS] 업로드 디렉토리 내용 (${uploadDir}):`, files.slice(0, 10)); // 처음 10개만
        } else {
          console.log(`[FILE ACCESS] 업로드 디렉토리가 존재하지 않음: ${uploadDir}`);
        }
      } catch (dirError) {
        console.error(`[FILE ACCESS] 디렉토리 확인 실패:`, dirError);
      }
      
      return NextResponse.json(
        { 
          message: `파일을 찾을 수 없습니다: ${filename}`,
          error: "FILE_NOT_FOUND",
          requestedFile: filename,
          environment: process.env.NODE_ENV,
          searchPaths: possiblePaths
        },
        { status: 404 }
      );
    }

    const contentType = getContentType(filename);

    // 원본 파일명 추출 (타임스탬프 제거)
    const originalFilename = filename.replace(/^\d+_/, '');
    
    // 안전한 ASCII 파일명 생성 (fallback용)
    const asciiFilename = originalFilename.replace(/[^\x00-\x7F]/g, "_");
    
    // RFC 6266에 따른 한글 파일명 인코딩
    const encodedFilename = encodeURIComponent(originalFilename);
    
    console.log(`[FILE ACCESS] 파일 제공 완료: ${originalFilename} (${file.length} bytes)`);
    
    return new NextResponse(file, {
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${asciiFilename}"; filename*=UTF-8''${encodedFilename}`,
        'Content-Length': file.length.toString(),
        'Cache-Control': 'public, max-age=31536000',
      },
    });
  } catch (error) {
    console.error("[FILE ACCESS] 파일 제공 오류:", error);
    return NextResponse.json(
      { 
        message: "파일 처리 중 오류가 발생했습니다.",
        error: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}

function getContentType(filename: string): string {
  const ext = path.extname(filename).toLowerCase();
  const contentTypes: { [key: string]: string } = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.bmp': 'image/bmp',
    '.pdf': 'application/pdf',
    '.doc': 'application/msword',
    '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    '.xls': 'application/vnd.ms-excel',
    '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    '.txt': 'text/plain',
    '.zip': 'application/zip',
    '.hwp': 'application/octet-stream'
  };
  return contentTypes[ext] || 'application/octet-stream';
} 