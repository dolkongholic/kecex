import prisma from "@/app/libs/prisma";

export default async function getNews() {
  const news = await prisma.news.findMany();

  return news;
}
