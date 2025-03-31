import { NextResponse } from "next/server";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import prisma from "@/app/libs/prisma";
import { existsSync } from "fs";

// 허용된 파일 타입 정의
const ALLOWED_FILE_TYPES = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
];

// 최대 파일 크기 (10MB)
const MAX_FILE_SIZE = 10 * 1024 * 1024;

// 파일 저장 경로 설정
const getUploadDir = () => {
  // 배포 환경에서는 /tmp 디렉토리 사용
  if (process.env.NODE_ENV === 'production') {
    return '/tmp/uploads';
  }
  // 개발 환경에서는 public/uploads 사용
  return path.join(process.cwd(), "public/uploads");
};

export async function POST(req: Request) {
  try {
    // FormData 파싱
    const formData = await req.formData();

    // 텍스트 필드 추출
    const text = formData.get("text")?.toString() || "";
    const date = formData.get("date")?.toString() || "";
    const post_text = formData.get("post_text")?.toString() || "";

    // 다중 파일 추출 (input name="files")
    const files = formData.getAll("files") as File[];

    // 파일 유효성 검사
    for (const file of files) {
      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        return NextResponse.json(
          { message: `지원하지 않는 파일 형식입니다: ${file.name}` },
          { status: 400 }
        );
      }
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { message: `파일 크기가 너무 큽니다 (최대 10MB): ${file.name}` },
          { status: 400 }
        );
      }
    }

    // 업로드 폴더 준비
    const uploadDir = getUploadDir();
    try {
      if (!existsSync(uploadDir)) {
        await mkdir(uploadDir, { recursive: true });
      }
    } catch (error) {
      console.error("업로드 디렉토리 생성 오류:", error);
      return NextResponse.json(
        { message: "업로드 디렉토리 생성 실패", error: error instanceof Error ? error.message : String(error) },
        { status: 500 }
      );
    }

    // 각 파일 저장 후 브라우저 접근 경로 배열 구성
    const savedFiles: string[] = [];
    const uploadErrors: string[] = [];

    for (const file of files) {
      try {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        
        // 파일명에서 파일 시스템에 유해한 문자만 제거하고 원본 파일명 최대한 유지
        const safeFileName = file.name.replace(/[<>:"/\\|?*\x00-\x1F]/g, '_');
        const fileName = `${Date.now()}_${safeFileName}`;
        const filePath = path.join(uploadDir, fileName);
        
        await writeFile(filePath, buffer);
        
        // 파일 URL 생성 (배포 환경에 따라 다르게 처리)
        const fileUrl = process.env.NODE_ENV === 'production'
          ? `/api/uploads/${fileName}` // 배포 환경에서는 API 라우트를 통해 파일 제공
          : `/uploads/${fileName}`;    // 개발 환경에서는 public 디렉토리에서 직접 제공
        
        savedFiles.push(fileUrl);
      } catch (error) {
        console.error(`파일 ${file.name} 업로드 실패:`, error);
        uploadErrors.push(`${file.name}: ${error instanceof Error ? error.message : String(error)}`);
      }
    }

    // 업로드된 파일이 하나도 없는 경우
    if (savedFiles.length === 0 && files.length > 0) {
      return NextResponse.json(
        { message: "모든 파일 업로드 실패", errors: uploadErrors },
        { status: 500 }
      );
    }

    // DB에 저장 (파일 배열을 JSON 문자열로 저장)
    const result = await prisma.notice.create({
      data: {
        title: text,
        content: post_text,
        date: date,
        file: JSON.stringify(savedFiles),
      },
    });

    // 일부 파일만 업로드 성공한 경우 경고 메시지 포함
    if (uploadErrors.length > 0) {
      return NextResponse.json({
        ...result,
        warning: "일부 파일 업로드 실패",
        errors: uploadErrors
      });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("파일 업로드 오류:", error);
    return NextResponse.json(
      { message: "업로드 실패", error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
