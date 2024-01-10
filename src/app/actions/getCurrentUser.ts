import { getServerSession } from "next-auth/next";
import { handler } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/app/libs/prisma";

interface IPrams {
  id?: any;
}

export default async function getCurrentUser(params: IPrams) {
  const { id } = params;
  // try {
  console.log(id);

  //   if (!session?.user?.name) {
  //     return null;
  //   }

  //   const currentUser = await prisma.user.findUnique({
  //     where: {
  //       name: session.user.name as string,
  //     },
  //   });

  //   if (!currentUser) {
  //     return null;
  //   }
  //   return {
  //     ...currentUser,
  //     createdAt: currentUser.createdAt.toISOString(),
  //     updatedAt: currentUser.updatedAt.toISOString(),
  //   };
  // } catch (error: any) {
  //   return null;
  // }
}
