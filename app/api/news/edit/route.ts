import { NextResponse } from "next/server";
import prisma from "@/app/libs/prisma";

export async function PATCH(request: Request) {
    const body = await request.json();

    const { id, text, date, post_text } = body;

    try {
        // 기존 공지사항을 찾아서 업데이트합니다.
        const existingNews = await prisma.news.findUnique({
            where: {
                id: Number(id),
            },
        });

        if (!existingNews) {
            return NextResponse.error();
        }

        const updatedNews = await prisma.news.update({
            where: {
                id: Number(id),
            },
            data: {
                title: text,
                content: post_text,
                date: date,
            },
        });

        // 업데이트된 공지사항을 반환합니다.
        return NextResponse.json(updatedNews);
    } catch (error) {
        // 오류 처리
        console.error("Error updating news:", error);
        return NextResponse.error();
    }
}
