import { NextResponse } from "next/server";

import prisma from "@/app/libs/prisma";

export async function POST(request: Request) {
    const id = await request.text();
    console.log(id)
    const school = await prisma.school.delete({
        where: {
            id: id
        },
    });

    return NextResponse.json(school);
}