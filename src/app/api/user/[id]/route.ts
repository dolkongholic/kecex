import { verifyJwt } from "@/app/libs/jwt";
import prisma from "@/app/libs/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  // 추가된 부분
  const accessToken = request.headers.get("authorization");
  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(JSON.stringify({ error: "No Authorization" }), {
      status: 401,
    });
  }

  console.log(params);

  const id = Number(params.id);

  return new Response(JSON.stringify("ok"));
}
