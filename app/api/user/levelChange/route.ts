import { NextResponse } from "next/server";
import prisma from "@/app/libs/prisma";

export async function PATCH(request: Request) {
    const body = await request.json();

    const {id, level } = body;

    try {
        // 기존 공지사항을 찾아서 업데이트합니다.
        const findUser = await prisma.user.findUnique({
            where: {
                id: id,
            },
        });

        if (!findUser) {
            return NextResponse.error();
        }

        const changeLevel = await prisma.user.update({
            where: {
                id: id,
            },
            data: {
                    level: level,

            },
        });

        // 업데이트된 공지사항을 반환합니다.
        return NextResponse.json(changeLevel);
    } catch (error) {
        // 오류 처리
        console.error("Error updating notice:", error);
        return NextResponse.error();
    }
}
