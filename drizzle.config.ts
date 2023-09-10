import type { Config } from "drizzle-kit";

export default {
    schema: "./src/db/schema.ts",
    driver: 'pg',
    dbCredentials: {
        connectionString: "postgres://postgres:postgres@localhost:5432/social-app"
    },
    out: "./migrations",
} satisfies Config;