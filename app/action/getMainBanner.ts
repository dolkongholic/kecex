import prisma from "@/app/libs/prisma";

export default async function getMainBanner() {
  const mainBanner = await prisma.mainBanner.findMany();

  return mainBanner;
}
