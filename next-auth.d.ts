// next-auth.d.ts
declare module "@auth/prisma-adapter" {
  import { Adapter } from "@auth/core/adapters";
  export function PrismaAdapter(client: any): Adapter;
}
