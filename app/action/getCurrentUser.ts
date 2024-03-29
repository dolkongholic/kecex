import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

import prisma from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();
    if (!session?.user?.name) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        name: session.user.name as string,
      },
    });

    if (!currentUser) {
      return null;
    }

    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
      //   email: currentUser.email?.toISOString() || null,
    };
  } catch (error: any) {
    return null;
  }
}
