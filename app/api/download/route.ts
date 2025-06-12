import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function POST(req: Request) {
  try {
    const { filePath } = await req.json();
    
    // filePath에서 실제 파일명만 추출 (/uploads/filename.ext -> filename.ext)
    const fileName = filePath.split("/").pop();
    if (!fileName) {
      return NextResponse.json(
        { error: "Invalid file path" },
        { status: 400 }
      );
    }
    
    // 실제 파일 경로 구성 (public/uploads/filename.ext)
    const uploadDir = process.env.NODE_ENV === 'production' 
      ? '/tmp/uploads'
      : path.join(process.cwd(), "public/uploads");
    const fullPath = path.join(uploadDir, fileName);
    
    // 파일이 존재하는지 확인
    if (!fs.existsSync(fullPath)) {
      return NextResponse.json(
        { error: "File not found" },
        { status: 404 }
      );
    }

    // 파일 읽기
    const fileBuffer = fs.readFileSync(fullPath);
    
    // 파일 타입 결정
    const fileType = path.extname(fileName).toLowerCase();
    let contentType = "application/octet-stream";
    
    // 일반적인 파일 타입에 대한 Content-Type 설정
    const mimeTypes: { [key: string]: string } = {
      ".pdf": "application/pdf",
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".png": "image/png",
      ".gif": "image/gif",
      ".doc": "application/msword",
      ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ".xls": "application/vnd.ms-excel",
      ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    };

    if (fileType in mimeTypes) {
      contentType = mimeTypes[fileType];
    }

    // Response 헤더 설정
    const headers = new Headers();
    headers.set("Content-Type", contentType);
    headers.set("Content-Disposition", `attachment; filename*=UTF-8''${encodeURIComponent(fileName)}`);
    
    return new NextResponse(fileBuffer, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error("Download error:", error);
    return NextResponse.json(
      { error: "Download failed" },
      { status: 500 }
    );
  }
} 