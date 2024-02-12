import prisma from "@/app/libs/prisma";

export default async function getNotice() {
  const notice = await prisma.notice.findMany();

  return notice;
}
