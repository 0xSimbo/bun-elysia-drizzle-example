import { Elysia } from "elysia"
import { db } from "./db"
import { users } from "./db/schema"

const allUsers = await db.select().from(users)

const app = new Elysia().get("/", () => allUsers).listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
