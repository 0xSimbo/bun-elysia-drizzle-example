import { users, UserType } from "../db/schema"
import { nanoid } from "nanoid"
import { db } from "../db"

function mockData(password: string): UserType[] {
  return [
    {
      id: nanoid(),
      name: "John Doe",
      email: "john@doe.email",
      password: password,
      updatedAt: new Date(),
      createdAt: new Date(),
    },
    {
      id: nanoid(),
      name: "Jana Doe",
      email: "jana@doe.email",
      password: password,
      updatedAt: new Date(),
      createdAt: new Date(),
    },
    {
      id: nanoid(),
      name: "John Doe Jr.",
      email: "johnjr@doe.email",
      password: password,
      updatedAt: new Date(),
      createdAt: new Date(),
    },
  ]
}

async function seedData(): Promise<void> {
  const hashedPassword = await Bun.password.hash("password")

  const data = mockData(hashedPassword)

  console.log("Seeding data...")
  for (let user of data) {
    await db.insert(users).values(user)
  }
  console.log("Seeding complete")
}
seedData()
  .catch(console.error)
  .finally(() => process.exit(0))
