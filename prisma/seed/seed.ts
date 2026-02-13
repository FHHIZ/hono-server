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
      name: "Chen Qianyu",
      email: "teacher@example.com",
      email_verified_at: new Date(),
      password: await bcrypt.hash("password", 12),
      role: Role.teacher,
    },
    {
      name: "Perlica",
      email: "teacher1@example.com",
      email_verified_at: new Date(),
      password: await bcrypt.hash("password", 12),
      role: Role.teacher,
    },
    {
      name: "Joachim Nokianvirtanen",
      email: "teacher2@example.com",
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
    {
      name: "Shun Mizushino",
      email: "student1@example.com",
      email_verified_at: new Date(),
      password: await bcrypt.hash("password", 12),
      role: Role.student,
    },
    {
      name: "Fushiguro Megumi",
      email: "student2@example.com",
      email_verified_at: new Date(),
      password: await bcrypt.hash("password", 12),
      role: Role.student,
    },
    {
      name: "Light Yagami",
      email: "student3@example.com",
      email_verified_at: new Date(),
      password: await bcrypt.hash("password", 12),
      role: Role.student,
    },
    {
      name: "Ryuzaki",
      email: "student4@example.com",
      email_verified_at: new Date(),
      password: await bcrypt.hash("password", 12),
      role: Role.student,
    },
    {
      name: "Midoriya Izuku",
      email: "student5@example.com",
      email_verified_at: new Date(),
      password: await bcrypt.hash("password", 12),
      role: Role.student,
    },
    {
      name: "Hakari Atsuko",
      email: "student6@example.com",
      email_verified_at: new Date(),
      password: await bcrypt.hash("password", 12),
      role: Role.student,
    },
    {
      name: "Oguri Topi",
      email: "student7@example.com",
      email_verified_at: new Date(),
      password: await bcrypt.hash("password", 12),
      role: Role.student,
    },
    {
      name: "Himmel",
      email: "student8@example.com",
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
