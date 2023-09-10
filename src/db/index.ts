import postgres from "postgres"
import { drizzle, type PostgresJsDatabase } from "drizzle-orm/postgres-js"

const queryClient = postgres("postgres://postgres:postgres@localhost:5432/social-app")
export const db: PostgresJsDatabase = drizzle(queryClient)
