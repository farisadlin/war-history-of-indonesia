// app/api/auth/signin/route.ts
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
// import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function POST(req: NextRequest) {
  try {
    // Validate request body
    const body = await req.json();
    const { email, password } = signInSchema.parse(body);

    // Find user by email
    const user: User | null = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Compare passwords -> TODOS: do it after the registration is built
    // const isPasswordValid = await compare(password, user.password ?? "");

    // console.log({ password, userPass: user.password, isPasswordValid });

    // if (!isPasswordValid) {
    //   return NextResponse.json(
    //     { message: "Invalid email or password" },
    //     { status: 401 }
    //   );
    // }

    // Create JWT token
    const token = sign(
      { userId: user.id },
      process.env.NEXT_PUBLIC_JWT_SECRET ?? "",
      {
        expiresIn: "1h",
      }
    );

    // Respond with token
    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 400 }
    );
  }
}
