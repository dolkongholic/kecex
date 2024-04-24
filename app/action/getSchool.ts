import prisma from "@/app/libs/prisma";

interface IParams {
    resumeId: string | null;
}

export async function getSchool(params: IParams) {
    const { resumeId } = params;
    // console.log("aaaaaaaa")
    // console.log(resumeId)
    try {
            if(resumeId == null || resumeId == undefined){
                return [];
            }else{            
                const response = await prisma.school.findMany({
                where:{
                    resumeId: resumeId,
                }
            });
            return response;}

    } catch (error) {
        console.error("Error fetching school information:", error);
        return { error: "Internal server error." };
    }
}

export default getSchool;