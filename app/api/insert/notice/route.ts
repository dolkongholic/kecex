import { NextResponse } from "next/server";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import prisma from "@/app/libs/prisma";

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

    // 업로드 폴더 준비 (public/uploads)
    const uploadDir = path.join(process.cwd(), "public/uploads");
    await mkdir(uploadDir, { recursive: true });

    // 각 파일 저장 후 브라우저 접근 경로 배열 구성
    const savedFiles: string[] = [];
    for (const file of files) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const fileName = `${Date.now()}_${file.name}`;
      const filePath = path.join(uploadDir, fileName);
      await writeFile(filePath, buffer);
      savedFiles.push(`/uploads/${fileName}`);
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

    return NextResponse.json(result);
  } catch (error) {
    console.error("파일 업로드 오류:", error);
    return NextResponse.json({ message: "업로드 실패", error }, { status: 500 });
  }
}
