import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
const connection = await mysql.createConnection({
    host: "kathydb-do-user-15641127-0.c.db.ondigitalocean.com",
    user: "doadmin",
    database: "defaultdb",
    password: 'AVNS_GOHw8oogOS85hjqFb1l',
    port: 25060
});
export const db = drizzle(connection);      