import bcrypt from "bcryptjs";
import { PrismaClient, Role } from "../../src/generated/prisma/index.js";

const prisma = new PrismaClient();

async function createUsers() {
  return [
    {
      name: "Endministrator",
      email: "admin@example.com",
      email_verified_at: new Date(),
      password: await bcrypt.hash("password", 12),
      role: Role.admin,
    },
    {
      name: "Uncle Iroh",
      email: "teacher@example.com",
      email_verified_at: new Date(),
      password: await bcrypt.hash("password", 12),
      role: Role.teacher,
    },
    {
      name: "Will Serfort",
      email: "student@example.com",
      email_verified_at: new Date(),
      password: await bcrypt.hash("password", 12),
      role: Role.student,
    },
  ];
}

async function seed() {
  const userData = await createUsers();

  for (const user of userData) {
    await prisma.users.upsert({
      where: { email: user.email },
      update: {},
      create: user,
    });
  }

  console.log("Seeding complete!");
}

seed()
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
