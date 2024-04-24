import { NextResponse } from "next/server";

import prisma from "@/app/libs/prisma";

export async function POST(request: Request) {
    const body = await request.json();

    // console.log(body);

    const { training_start, training_end, trnInstitution, trnName, trn_content, resumeId } = body;
    // console.log(resumeId)
    console.log( training_start, training_end, trnInstitution, trnName, trn_content)
    const training = await prisma.training.create({
        data: {
            training_start: training_start,
            training_end: training_end,
            trnInstitution: trnInstitution,
            trnName: trnName,
            trn_content: trn_content,
            resumeId: resumeId,
        },
    });

    return NextResponse.json(training);
}