import { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/app/_lib/prisma";

export const authConfig: NextAuthConfig = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", name: "email" },
        password: { label: "Password", type: "password", name: "password" },
      },
      async authorize(
        credentials: Record<"email" | "password", string> | undefined | any
      ) {
        if (!credentials) {
          return null;
        }

        const { email, password } = credentials;

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/auth/signin`,
          {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data: { token: string } = await res.json();

        if (res.ok && data.token) {
          const user = await prisma.user.findUnique({
            where: { email: email as string },
          });
          if (user) {
            return { ...user, token: data.token };
          }
        }

        return null;
      },
    }),
  ],
};
