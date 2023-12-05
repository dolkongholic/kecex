import bcrypt from "bcrypt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

import prisma from "@/app/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },

      async authorize(credentials) {
        // if (!credentials?.email || !credentials?.password) {
        //   throw new Error("Invalid credentials");
        // }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        // if (!user || !user?.password) {
        //   throw new Error("Invalid credentials");
        // }

        const isCorrectPassword = credentials.password == user.password;

        // if (!isCorrectPassword) {
        //   throw new Error("Invalid credentials");
        // }

        return user;
      },
    }),
  ],

  pages: {
    signIn: "/member/signin",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
