import prisma from "@/app/libs/prisma";

interface IParams {
    resumeId: string | null;
}

export async function getLicense(params: IParams) {
    const { resumeId } = params;
    // console.log("aaaaaaaa")
    // console.log(resumeId)
    try {
            if(resumeId == null || resumeId == undefined){
                return [];
            }else{            
                const response = await prisma.license.findMany({
                where:{
                    resumeId: resumeId,
                }
        });
        return response;}

    } catch (error) {
        console.error("자격증 정보를 불러오는데 실패하였습니다:", error);
        return { error: "인터넷 서버 오류" };
    }
}

export default getLicense;