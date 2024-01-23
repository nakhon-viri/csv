import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
// import { db } from "./lib/db";

export default {
    providers: [
        Credentials({
            async authorize(credentials) {
                console.log('credentials', credentials)
                // const user = await db.user.findUnique({ where: { email: 'arm@mail.com' } });
                // console.log('user', user)
                return {
                    ...credentials,
                    name: 'Nakhon viriyarodjanawut',
                    role: "ADMIN"
                };

                return null;
            }
        })
    ],
} satisfies NextAuthConfig