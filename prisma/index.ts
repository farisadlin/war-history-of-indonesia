import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export type Post = {
  id: number;
  title: string;
  content: string | null;
  published: boolean;
  authorId: number | null;
};

export type Profile = {
  id: number;
  bio: string | null;
  userId: number;
};

export type User = {
  id: number;
  email: string;
  name: string | null; // Updated to allow null
};

async function main() {
  await prisma.user.create({
    data: {
      name: "Chandra",
      email: "chandra@prisma.io",
      posts: {
        create: { title: "Hello World" },
      },
      profile: {
        create: { bio: "I like turtles" },
      },
    },
  });

  const allUsers: (User & {
    posts: Post[];
    profile: Profile | null;
  })[] = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
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
