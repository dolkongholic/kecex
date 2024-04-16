import { NextResponse } from "next/server";
import prisma from "@/app/libs/prisma";

export async function PATCH(request: Request) {
    try{
        const body = await request.json();

        const { title, content, qnaId } = body;

        console.log(body);
        const qnaAnswer = await prisma.qnaAnswer.update({
            where: {
                qnaId: qnaId,
            },
            data: {
                title: title,
                content: content,
            },
        });
        
        return NextResponse.json(qnaAnswer);
    }catch (error) {
        // 오류 처리
        console.error("Error updating notice:", error);
        return NextResponse.error();
    }
}