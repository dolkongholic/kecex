import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const pathname = url.pathname;
    
    // /api/uploads/some/file/path.ext에서 파일 경로 추출
    const filePath = pathname.replace('/api/uploads', '');
    const filename = filePath.split('/').pop();
    
    if (!filename) {
      return NextResponse.json(
        { message: "파일명이 필요합니다." },
        { status: 400 }
      );
    }

    // URL 디코딩 처리 (한글 파일명 지원)
    const decodedFilename = decodeURIComponent(filename);
    
    // 기존 파일들을 찾기 위한 다양한 경로 시도
    const possiblePaths = [
      // public/uploads 디렉토리
      path.join(process.cwd(), "public/uploads", decodedFilename),
      // uploads 디렉토리
      path.join(process.cwd(), "uploads", decodedFilename),
      // public 디렉토리
      path.join(process.cwd(), "public", decodedFilename),
    ];

    let file: Buffer | null = null;
    let foundPath = '';

    // 각 경로에서 파일 찾기 시도
    for (const filePath of possiblePaths) {
      try {
        file = await readFile(filePath);
        foundPath = filePath;
        console.log(`호환성 경로에서 파일 찾음: ${foundPath}`);
        break;
      } catch (error) {
        // 다음 경로 시도
        continue;
      }
    }

    // 모든 경로에서 파일을 찾지 못한 경우
    if (!file) {
      console.error(`호환성 경로에서 파일을 찾을 수 없음: ${decodedFilename}`);
      return NextResponse.json(
        { message: `파일을 찾을 수 없습니다: ${decodedFilename}` },
        { status: 404 }
      );
    }

    const contentType = getContentType(decodedFilename);

    // 원본 파일명 추출 (타임스탬프 제거)
    const originalFilename = decodedFilename.replace(/^\d+_/, '');
    
    // 안전한 ASCII 파일명 생성 (fallback용)
    const asciiFilename = originalFilename.replace(/[^\x00-\x7F]/g, "_");
    
    // RFC 6266에 따른 한글 파일명 인코딩
    const encodedFilename = encodeURIComponent(originalFilename);
    
    return new NextResponse(file, {
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${asciiFilename}"; filename*=UTF-8''${encodedFilename}`,
        'Content-Length': file.length.toString(),
        'Cache-Control': 'public, max-age=31536000',
      },
    });
  } catch (error) {
    console.error("호환성 파일 제공 오류:", error);
    return NextResponse.json(
      { message: "파일 처리 중 오류가 발생했습니다." },
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