import { NextResponse } from "next/server";

import prisma from "@/app/libs/prisma";

export async function POST(request: Request) {
  const body = await request.json();

  console.log(body);

  const { text, date, post_text } = body;

  const result = await prisma.notice.create({
    data: {
      title: text,
      content: post_text,
      date: date,
      file: "",
    },
  });

  return NextResponse.json(result);
}
