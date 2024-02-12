import { NextResponse } from "next/server";

import prisma from "@/app/libs/prisma";

export async function POST(request: Request) {
  const body = await request.json();

  const { id } = body;

  const result = await prisma.mainBanner.delete({
    where: {
      id: id,
    },
  });

  return NextResponse.json(result);
}
