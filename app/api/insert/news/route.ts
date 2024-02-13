import { NextResponse } from "next/server";

import prisma from "@/app/libs/prisma";

export async function POST(request: Request) {
  const body = await request.json();

  const { text, date, post_text, imageSrc } = body;

  const result = await prisma.news.create({
    data: {
      title: text,
      content: post_text,
      date: date,
      img: imageSrc,
    },
  });

  return NextResponse.json(result);
}
