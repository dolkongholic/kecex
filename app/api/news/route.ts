import prisma from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body)

  const news = await prisma.news.findFirst({
    where: {
      id: Number(body.id),
    },
  });

  return NextResponse.json(news);
}
