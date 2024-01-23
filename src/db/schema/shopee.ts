import {
    int,
    timestamp,
    mysqlTable,
    primaryKey,
    varchar,
    serial,
    decimal
} from "drizzle-orm/mysql-core"
import type { AdapterAccount } from "@auth/core/adapters"


export const users = mysqlTable("SHOPEE", {
    ORDER_ID: varchar("id", { length: 100 }).notNull().primaryKey(),
    STATUS_ORDER: varchar("name", { length: 255 }),
    email: varchar("email", { length: 255 }).notNull(),
    emailVerified: timestamp("emailVerified", { mode: "date", fsp: 3 }).defaultNow(),
    image: varchar("image", { length: 255 }),
})