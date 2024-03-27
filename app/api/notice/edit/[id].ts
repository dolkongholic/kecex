import prisma from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const preNotice = await prisma.notice.findFirst({
    where: {
      id: Number(body.id),
    },
  });

  return NextResponse.json(preNotice);
}
