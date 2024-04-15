import { NextResponse } from "next/server";

import prisma from "@/app/libs/prisma";

export async function POST(request: Request) {
    const body = await request.json();

  // console.log(body);

    const { id, requested_at } = body;

    const payment = await prisma.payment.create({
        data: {
        userId: id,
        requested_at : requested_at
        },
    });

    return NextResponse.json(payment);
}
