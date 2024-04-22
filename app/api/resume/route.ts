import { NextResponse } from "next/server";

import prisma from "@/app/libs/prisma";

export async function POST(request: Request) {
    const body = await request.json();

    // console.log(body);

    const { lastName, firstName, birthDate, profileImg, userId } = body;

    const existingProfile = await prisma.resume.findFirst({
        where:{
            userId: userId
        }
    })


    if(existingProfile){
        const updatedProfile = await prisma.resume.update({
        where: {userId: userId},
        data: {
            lastName: lastName,
            firstName: firstName,
            birthDate: birthDate,
            profileImg: profileImg,
        }
        });
        return NextResponse.json(updatedProfile);
    }else{
        const profile = await prisma.resume.create({
            data: {
            lastName: lastName,
            firstName: firstName,
            birthDate: birthDate,
            profileImg: profileImg,
            user: {
                connect : {id: userId}
            }
            },
        });
    return NextResponse.json(profile);
    }

}