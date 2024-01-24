import type { Config } from "drizzle-kit";
import "dotenv/config";

// if (!process.env.DATABASE_URL) {
//     throw new Error('DATABASE_URL is missing');
// }

export default {
  schema: "./src/db/schema",
  out: "./drizzle/migrations",
  driver: "mysql2",
  dbCredentials: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "sale",
  },
} satisfies Config;
