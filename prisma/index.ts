import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type CommonDateType = {
  createdAt: Date;
  updatedAt: Date;
};

type Post = {
  id: string; // Changed to number to match the Prisma schema
  title: string;
  content: string | null;
  published: boolean;
  authorId: string | null;
} & CommonDateType;

type Profile = {
  id: string; // Changed to number to match the Prisma schema
  bio: string | null;
  userId: string;
  image: string; // Added this field to match the Prisma schema
};

type Account = {
  id: string;
  userId: string;
  providerType: string;
  providerId: string;
  providerAccountId: string;
  refreshToken: string | null;
  accessToken: string | null;
  accessTokenExpires: Date | null;
} & CommonDateType;

type Session = {
  id: string;
  expires: Date;
  sessionToken: string;
  accessToken: string;
  userId: string;
} & CommonDateType;

type User = {
  id: string;
  email: string | null;
  name: string | null;
  password: string | null;
  emailVerified: Date | null;
  image: string | null;
} & CommonDateType;

async function main() {
  await prisma.user.create({
    // where: {
    //   id: "clylrj2bd0000vdxgdpsujee5", -> for an update
    // },
    data: {
      name: "Faris",
      email: "faris@prisma.io",
      password: "12345678",
      role: "MEMBER",
      posts: {
        create: {
          title: "Hello World",
          content: `
          ## Links

          [Google](https://www.google.com) - This link takes you to Google.

          [OpenAI](https://www.openai.com) - This link takes you to OpenAI.
          `,
        },
      },
      profile: {
        create: {
          bio: "I like turtles",
          image: "https://example.com/image.png",
        }, // Added image field
      },
    },
  });

  const allUsers: (User & {
    profile: Profile | null;
    posts: Post[];
    accounts: Account[];
    sessions: Session[];
  })[] = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
      accounts: true,
      sessions: true,
    },
  });

  console.dir(allUsers, { depth: null });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
