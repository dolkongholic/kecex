import { NextResponse } from "next/server";

import prisma from "@/app/libs/prisma";

export async function POST(request: Request) {
    const body = await request.json();

    const { licenseName, licenseDept, licenseDate, resumeId } = body;
    // console.log(careerType, companyName, job_start, job_end, position, career_content ,resumeId )
    const license = await prisma.license.create({
        data: {
            licenseName: licenseName,
            licenseDept: licenseDept,
            licenseDate: licenseDate,
            resumeId: resumeId,
        },
    });

    return NextResponse.json(license);
}