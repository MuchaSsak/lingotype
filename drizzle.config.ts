import { defineConfig } from "drizzle-kit";
import "dotenv/config";
import { DATABASE_URL } from "./lib/constants";

export default defineConfig({
  out: "./drizzle",
  schema: "./server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: DATABASE_URL!,
  },
});
