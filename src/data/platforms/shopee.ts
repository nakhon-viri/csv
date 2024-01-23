'use server'

import { db } from "@/db";
import { users } from "@/db/schema/auth";
import { v4 as uuidv4 } from "uuid";
import { sql } from 'drizzle-orm'

export const uploadShopee = async (orderId: string, statusOrder: string): Promise<any[] | any> => {
    try {
        // return await db.execute(sql`insert into SHOPEE ("ORDER_ID","STATUS_ORDER") values (${orderId}, ${statusOrder})`)
        console.log('111', 111)
        return await db.execute(sql`select * from shopee`)
        // return await db.execute(sql`insert into SHOPEE set ORDER_ID= 'test2', STATUS_ORDER= 'test23'`)
        // return await db.select().from(users);
    } catch (error: any) {
        return error
    }

}