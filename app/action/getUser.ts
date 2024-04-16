import prisma from "@/app/libs/prisma";

export default async function getUser() {
    const user = await prisma.user.findMany();

    return user;
}
