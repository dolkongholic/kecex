import prisma from "@/app/libs/prisma";

export default async function getRaw() {
  const raw = await prisma.raw.findMany();

  return raw;
}
