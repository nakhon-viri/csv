import NextAuth from "next-auth"

import authConfig from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";


import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "./db";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    pages: {
        signIn: "/login",
    },
    adapter: DrizzleAdapter(db),
    session: { strategy: "jwt" },
    ...authConfig,
});