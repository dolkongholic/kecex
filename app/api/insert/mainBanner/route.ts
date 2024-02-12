import { NextResponse } from "next/server";

import prisma from "@/app/libs/prisma";

export async function POST(request: Request) {
  const body = await request.json();

  const { imageSrc } = body.data;

  const result = await prisma.mainBanner.create({
    data: {
      fileUrl: imageSrc,
    },
  });

  return NextResponse.json(result);
}
