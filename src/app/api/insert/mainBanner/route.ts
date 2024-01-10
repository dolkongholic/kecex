import { NextResponse } from "next/server";

import prisma from "@/app/libs/prisma";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const { data } = body;

  const result = await prisma.mainBanner.create({
    data: {
      fileUrl: data.banner,
    },
  });

  return NextResponse.json(result);
}
