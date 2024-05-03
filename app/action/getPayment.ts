import prisma from "@/app/libs/prisma";

interface IParams {
    id: string | null;
}

export default async function getPayment(params: IParams) {
    const { id } = params;

    if (!id) {
        return;
    }
    const paymentList = await prisma.payment.findMany({
        where: {
        userId: id,
        },
        include: {
            user:true // user 데이터도 가져옴
        }
    });

    return paymentList;
};
