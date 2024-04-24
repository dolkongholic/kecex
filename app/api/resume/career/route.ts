import { NextResponse } from "next/server";

import prisma from "@/app/libs/prisma";

export async function POST(request: Request) {
    const body = await request.json();

    const { careerType, companyName, job_start, job_end, position, career_content ,resumeId } = body;
    console.log(careerType, companyName, job_start, job_end, position, career_content ,resumeId )
    const career = await prisma.career.create({
        data: {
            careerType: careerType,
            companyName: companyName,
            job_start: job_start,
            job_end: job_end,
            position: position,
            career_content: career_content,
            resumeId: resumeId,
        },
    });

    return NextResponse.json(career);
}