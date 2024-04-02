import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

import prisma from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export async function getSession() {
  return await getServerSession(authOptions);
}

// export default async function getCurrentUserInfo() {
//   try {
//     const session = await getSession();
//     if (!session?.user?.name) {
//       return null;
//     }

//     const currentUserInfo = await prisma.userinfo.findUnique({
//       where: {
//         // name: session.user.name as string,
//       },
//     });

//     if (!currentUserInfo) {
//       return null;
//     }

//     return {
//       ...currentUserInfo,
//       //   email: currentUser.email?.toISOString() || null,
//     };
//   } catch (error: any) {
//     return null;
//   }
// }
