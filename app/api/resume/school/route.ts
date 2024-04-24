import { NextResponse } from "next/server";

import prisma from "@/app/libs/prisma";

export async function POST(request: Request) {
    const body = await request.json();

    // console.log(body);

    const { schoolType, schoolName, majorName, graduation, degree ,resumeId } = body;
    // console.log(resumeId)
    console.log( schoolType, schoolName, majorName, graduation, degree, resumeId)
    const school = await prisma.school.create({
        data: {
            schoolType: schoolType,
            schoolName: schoolName,
            majorName: majorName,
            graduation: graduation,
            degree: degree,
            resumeId: resumeId,
        },
    });

    return NextResponse.json(school);
}