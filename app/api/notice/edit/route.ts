import { NextResponse } from "next/server";
import prisma from "@/app/libs/prisma";

export async function PATCH(request: Request) {
    const body = await request.json();

    const { id, text, date, post_text } = body;

    try {
        // 기존 공지사항을 찾아서 업데이트합니다.
        const existingNotice = await prisma.notice.findUnique({
            where: {
                id: Number(id),
            },
        });

        if (!existingNotice) {
            return NextResponse.error();
        }

        const updatedNotice = await prisma.notice.update({
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
        return NextResponse.json(updatedNotice);
    } catch (error) {
        // 오류 처리
        console.error("Error updating notice:", error);
        return NextResponse.error();
    }
}
