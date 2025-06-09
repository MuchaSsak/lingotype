import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { DATABASE_URL } from "@/lib/constants";

const sql = neon(DATABASE_URL!);
const db = drizzle({ client: sql });

export default db;
