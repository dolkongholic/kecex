import { signJwtAccessToken } from "@/app/libs/jwt";
import prisma from "@/app/libs/prisma";
import * as bcrypt from "bcrypt";

interface RequestBody {
  username: string;
  password: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  const user = await prisma.user.findFirst({
    where: {
      name: body.username,
    },
  });

  if (
    user &&
    user.hashedPassword &&
    (await bcrypt.compare(body.password, user.hashedPassword))
  ) {
    const { hashedPassword, ...userWithoutPass } = user;

    // 추가된 부분
    const accessToken = signJwtAccessToken(userWithoutPass);
    const result = {
      ...userWithoutPass,
      accessToken,
    };

    return new Response(JSON.stringify(result));
  } else return new Response(JSON.stringify(null));
}
