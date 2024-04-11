import { NextResponse } from "next/server";
import prisma from "@/app/libs/prisma";

export async function POST(request: Request) {
    const { name, koname, email } = await request.json(); // 요청 본문에서 사용자 정보 추출

    console.log("api 전달됨");

    // 서버에서 사용자 정보를 확인하고 일치 여부를 판단
    const user = await prisma.user.findFirst({ 
        where: { 
            name, 
            koname, 
            email 
        } 
    });
    if (user && user.name === name && user.koname === koname && user.email === email) {
        // 사용자 정보가 일치하는 경우
        return NextResponse.json({ success: true });
    } else {
        // 사용자 정보가 일치하지 않는 경우
        return NextResponse.json({ success: false });
    }
}