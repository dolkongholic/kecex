import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

export async function GET(
  request: Request,
  { params }: { params: { filename: string } }
) {
  try {
    // URL 디코딩 처리 (한글 파일명 지원)
    const filename = decodeURIComponent(params.filename);
    
    const uploadDir = process.env.NODE_ENV === 'production' ? '/tmp/uploads' : path.join(process.cwd(), "public/uploads");
    const filePath = path.join(uploadDir, filename);

    const file = await readFile(filePath);
    const contentType = getContentType(filename);

    // 원본 파일명 추출 (타임스탬프 제거)
    const originalFilename = filename.replace(/^\d+_/, '');
    
    // 안전한 ASCII 파일명 생성 (fallback용)
    const asciiFilename = originalFilename.replace(/[^\x00-\x7F]/g, "_");
    
    // RFC 6266에 따른 한글 파일명 인코딩
    const encodedFilename = encodeURIComponent(originalFilename);
    
    return new NextResponse(file, {
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${asciiFilename}"; filename*=UTF-8''${encodedFilename}`,
        'Content-Length': file.length.toString(),
      },
    });
  } catch (error) {
    console.error("파일 제공 오류:", error);
    return NextResponse.json(
      { message: "파일을 찾을 수 없습니다." },
      { status: 404 }
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
    '.pdf': 'application/pdf',
    '.doc': 'application/msword',
    '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    '.xls': 'application/vnd.ms-excel',
    '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  };
  return contentTypes[ext] || 'application/octet-stream';
} 