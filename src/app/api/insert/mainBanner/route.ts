import { NextResponse } from "next/server";

import prisma from "@/app/libs/prisma";

export async function POST(request: Request) {
  const body = await request.json();
  const { data } = body;

  const result = await prisma.mainBanner.create({
    data: {
      fileUrl: data.banner,
    },
  });

  return NextResponse.json(result);
}
