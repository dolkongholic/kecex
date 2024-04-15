import prisma from "@/app/libs/prisma";

export default async function getAllQna() {
    const payment = await prisma.payment.findMany({
        include: {
            user:true // user 데이터도 가져옴
        }

    });

    return payment;
}