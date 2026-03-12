import bcrypt from "bcryptjs";
import { Role, type Users } from "../../../src/generated/prisma/index.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createUsers() {
  return [
    {
      name: "Endministrator",
      email: "admin@example.com",
      password: await bcrypt.hash("password", 12),
      role: Role.ADMIN,
      slug: "endmin",
    },
    {
      name: "Chen Qianyu",
      email: "teacher@example.com",
      password: await bcrypt.hash("password", 12),
      role: Role.TEACHER,
      slug: "chenqianyu",
    },
    {
      name: "Perlica",
      email: "teacher1@example.com",
      password: await bcrypt.hash("password", 12),
      role: Role.TEACHER,
      slug: "perlica",
    },
    {
      name: "Joachim Nokianvirtanen",
      email: "teacher2@example.com",
      password: await bcrypt.hash("password", 12),
      role: Role.TEACHER,
      slug: "welt",
    },
    {
      name: "Will Serfort",
      email: "student@example.com",
      password: await bcrypt.hash("password", 12),
      role: Role.STUDENT,
      slug: "will",
    },
    {
      name: "Shun Mizushino",
      email: "student1@example.com",
      password: await bcrypt.hash("password", 12),
      role: Role.STUDENT,
      slug: "aurafarmer",
    },
    {
      name: "Fushiguro Megumi",
      email: "student2@example.com",
      password: await bcrypt.hash("password", 12),
      role: Role.STUDENT,
      slug: "potentialm",
    },
    {
      name: "Light Yagami",
      email: "student3@example.com",
      password: await bcrypt.hash("password", 12),
      role: Role.STUDENT,
      slug: "kira",
    },
    {
      name: "Ryuzaki",
      email: "student4@example.com",
      password: await bcrypt.hash("password", 12),
      role: Role.STUDENT,
      slug: "l",
    },
    {
      name: "Midoriya Izuku",
      email: "student5@example.com",
      password: await bcrypt.hash("password", 12),
      role: Role.STUDENT,
      slug: "deku",
    },
    {
      name: "Hakari Atsuko",
      email: "student6@example.com",
      password: await bcrypt.hash("password", 12),
      role: Role.STUDENT,
      slug: "hakariatsu",
    },
    {
      name: "Oguri Topi",
      email: "student7@example.com",
      password: await bcrypt.hash("password", 12),
      role: Role.STUDENT,
      slug: "fatfuu",
    },
    {
      name: "Himmel",
      email: "student8@example.com",
      password: await bcrypt.hash("password", 12),
      role: Role.STUDENT,
      slug: "wielinoino",
    },
    {
      name: "Zoro",
      email: "unregister@example.com",
      password: await bcrypt.hash("password", 12),
      role: Role.STUDENT,
      slug: "mosshair",
    },
  ];
}

export async function seedUsers(): Promise<Users[]> {
  try {
    const userData = await createUsers();
    const seededUsers = [];

    for (const user of userData) {
      const data = await prisma.users.upsert({
        where: { email: user.email },
        update: {},
        create: user,
      });

      seededUsers.push(data);
    }
    return seededUsers;
  } catch (error) {
    console.error("Error seeding classes:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
