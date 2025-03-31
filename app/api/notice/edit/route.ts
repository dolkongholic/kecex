import { NextResponse } from "next/server";
import prisma from "@/app/libs/prisma";
import { writeFile, mkdir, unlink } from "fs/promises";
import path from "path";

export async function PATCH(request: Request) {
    try {
        const formData = await request.formData();

        const id = formData.get("id")?.toString();
        const text = formData.get("text")?.toString() || "";
        const date = formData.get("date")?.toString() || "";
        const post_text = formData.get("post_text")?.toString() || "";
        const existingFilesJson = formData.get("existingFiles")?.toString() || "[]";
        const files = formData.getAll("files") as File[];

        // 기존 공지사항을 찾아서 업데이트합니다.
        const existingNotice = await prisma.notice.findUnique({
            where: {
                id: Number(id),
            },
        });

        if (!existingNotice) {
            return NextResponse.error();
        }

        // 기존 파일 목록 파싱
        let existingFiles: string[] = [];
        try {
            existingFiles = JSON.parse(existingFilesJson);
        } catch (error) {
            console.error("기존 파일 목록 파싱 오류:", error);
            existingFiles = [];
        }

        // 삭제된 파일 처리
        const oldFiles = existingNotice.file ? JSON.parse(existingNotice.file) : [];
        const deletedFiles = oldFiles.filter((file: string) => !existingFiles.includes(file));
        
        // 삭제된 파일들을 서버에서도 삭제
        for (const fileUrl of deletedFiles) {
            try {
                const fileName = fileUrl.split("/").pop();
                if (fileName) {
                    const filePath = path.join(process.cwd(), "public/uploads", fileName);
                    await unlink(filePath);
                }
            } catch (error) {
                console.error("파일 삭제 오류:", error);
            }
        }

        // 새 파일 업로드
        const uploadDir = path.join(process.cwd(), "public/uploads");
        await mkdir(uploadDir, { recursive: true });

        const newFiles: string[] = [];
        for (const file of files) {
            const arrayBuffer = await file.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            const fileName = `${Date.now()}_${file.name}`;
            const filePath = path.join(uploadDir, fileName);
            await writeFile(filePath, buffer);
            newFiles.push(`/uploads/${fileName}`);
        }

        // 최종 파일 목록 구성 (기존 파일 + 새 파일)
        const finalFiles = [...existingFiles, ...newFiles];

        const updatedNotice = await prisma.notice.update({
            where: {
                id: Number(id),
            },
            data: {
                title: text,
                content: post_text,
                date: date,
                file: JSON.stringify(finalFiles),
            },
        });

        return NextResponse.json(updatedNotice);
    } catch (error) {
        console.error("Error updating notice:", error);
        return NextResponse.error();
    }
}
