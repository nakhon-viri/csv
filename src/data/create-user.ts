'use server'

import { db } from "@/db";
import { users } from "@/db/schema/auth";
import { v4 as uuidv4 } from "uuid";

export const createUser = async () => {
    try {
        let a = await db
            .insert(users)
            .values({ name: 'Andrew', email: 'arm2@mail.com', id: uuidv4() });
        return a
    } catch (error) {
        return error
    }

}