import { NextResponse } from "next/server";

import prisma from "@/app/libs/prisma";

export async function POST(request: Request) {
  const body = await request.json();

  const { text, date, post_text } = body;

  const result = await prisma.raw.create({
    data: {
      title: text,
      content: post_text,
      date: date,
      file: "",
    },
  });

  return NextResponse.json(result);
}
