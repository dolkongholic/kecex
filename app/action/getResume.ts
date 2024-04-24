import prisma from "@/app/libs/prisma";

interface IParams {
    id: string;
}

export default async function getResume(params: IParams) {
    const { id } = params;
    // console.log(id)

    if (id === null) {
        return null;
    }
    const currentResume = await prisma.resume.findFirst({
        where: {
            userId: id,
        },
    });

    return currentResume;
}