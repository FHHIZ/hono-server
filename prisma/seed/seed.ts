import bcrypt from "bcryptjs";
import { PrismaClient, Role } from "../../src/generated/prisma/index.js";
import { seedClass } from "./seeders/classSeeder.js";
import { seedUsers } from "./seeders/userSeeder.js";
import { seedStudent } from "./seeders/studentSeeder.js";

const prisma = new PrismaClient();

async function mainSeeder() {
  console.log(`Start to seeding...`);
  const userData = await seedUsers()
  console.log("User Seeding complete!");
  const classData = await seedClass();
  console.log(`Class Seeding complete!`);
  const studentData = await seedStudent(userData, classData);
}
