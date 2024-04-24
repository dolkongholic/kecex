import prisma from "@/app/libs/prisma";

interface IParams {
    resumeId: string | null;
}

export async function getCareer(params: IParams) {
    const { resumeId } = params;
    // console.log("aaaaaaaa")
    // console.log(resumeId)
    try {
            if(resumeId == null || resumeId == undefined){
                return [];
            }else{            
                const response = await prisma.career.findMany({
                where:{
                    resumeId: resumeId,
                }
            });
            return response;}

    } catch (error) {
        console.error("경력 정보를 불러오는데 실패하였습니다:", error);
        return [];
    }
}

export default getCareer;