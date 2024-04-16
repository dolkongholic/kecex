import prisma from "@/app/libs/prisma";

export default async function getAllQna() {
    const qna = await prisma.qna.findMany();

    return qna;
}