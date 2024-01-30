import { User } from "@prisma/client";

export type SafeUser = Omit<User, "createdAt" | "updatedAt" | "email"> & {
  createdAt: string;
  updatedAt: string;
  email: string | null;
};
