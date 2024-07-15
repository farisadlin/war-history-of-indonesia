import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sign } from "jsonwebtoken";
import prisma from "@/app/_lib/prisma";

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = signInSchema.parse(body);

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Simulate password validation (assuming a hashed password is stored)
    // TODO: Replace this with actual password comparison logic
    // const isPasswordValid = await compare(password, user.password ?? "");
    // if (!isPasswordValid) {
    //   return NextResponse.json(
    //     { message: "Invalid email or password" },
    //     { status: 401 }
    //   );
    // }

    const token = sign({ userId: user.id }, process.env.NEXTAUTH_SECRET ?? "", {
      expiresIn: "1h",
    });

    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 400 }
    );
  }
}
