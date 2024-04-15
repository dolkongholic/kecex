import { NextResponse } from "next/server";
import prisma from "@/app/libs/prisma";

export async function PATCH(request: Request) {
    const body = await request.json();

    const {id} = body;

    try {
        // 기존 공지사항을 찾아서 업데이트합니다.
        const findPayment = await prisma.payment.findUnique({
            where: {
                id: id,
            },
        });

        if (!findPayment) {
            return NextResponse.error();
        }

        const confirm = await prisma.payment.update({
            where: {
                id: id,
            },
            data: {
                    status: 1,

            },
        });

        // 입금 확인 상태 업데이트.
        return NextResponse.json(confirm);
    } catch (error) {
        // 오류 처리
        console.error("Error updating notice:", error);
        return NextResponse.error();
    }
}
