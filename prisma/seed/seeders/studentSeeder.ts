import {
  type Class,
  type Student,
  type Users,
} from "../../../src/generated/prisma/index.js";
import { PrismaClient } from "@prisma/client";
import { academicYearHelpers } from "../../../src/helpers/academicYear.js";

const prisma = new PrismaClient();

async function createStudents() {
const year = academicYearHelpers()
  return [
    {
      slug: "will",
      academicYear: year,
      major: "TITL",
      classNumber: "2",
      nis: "1000000001",
    },
    {
      slug: "aurafarmer",
      academicYear: year,
      major: "TOI",
      classNumber: "1",
      nis: "1000000002",
    },
    {
      slug: "potentialm",
      academicYear: year,
      major: "TAV",
      classNumber: "1",
      nis: "1000000003",
    },
    {
      slug: "kira",
      academicYear: year,
      major: "TKJ",
      classNumber: "1",
      nis: "1000000004",
    },
    {
      slug: "l",
      academicYear: year,
      major: "TKJ",
      classNumber: "2",
      nis: "1000000005",
    },
    {
      slug: "deku",
      academicYear: year,
      major: "DKV",
      classNumber: "1",
      nis: "1000000006",
    },
    {
      slug: "hakariatsu",
      academicYear: year,
      major: "DKV",
      classNumber: "2",
      nis: "1000000007",
    },
    {
      slug: "fatfuu",
      academicYear: year,
      major: "RPL",
      classNumber: "1",
      nis: "1000000008",
    },
    {
      slug: "wielinoino",
      academicYear: year,
      major: "RPL",
      classNumber: "2",
      nis: "1000000009",
    },
    {
      slug: "mosshair",
      academicYear: year,
      major: "RPL",
      classNumber: "3",
      nis: "1000000010",
    },
  ];
}

export async function seedStudent(
  users: Users[],
  classes: Class[],
): Promise<Student[]> {
  try {
    const studentRawData = await createStudents();
    const results: Student[] = [];

    for (const data of studentRawData) {
      // 1. Cari User yang sesuai berdasarkan slug
      const targetUser = users.find((u) => u.slug === data.slug);
      
      // 2. Cari Kelas yang sesuai berdasarkan Major, Year, dan Number
      const targetClass = classes.find(
        (c) =>
          c.major === data.major &&
          c.academicYear === data.academicYear &&
          c.classNumber === parseInt(data.classNumber)
      );

      if (!targetUser || !targetClass) {
        console.warn(`Skipping ${data.slug}: User or Class not found`);
        continue;
      }

      // 3. Upsert ke tabel Student
      const seededStudent = await prisma.student.upsert({
        where: { user_id: targetUser.id },
        update: {
          class_id: targetClass.id,
          nis: data.nis,
        },
        create: {
          user_id: targetUser.id,
          class_id: targetClass.id,
          nis: data.nis,
        },
      });

      results.push(seededStudent);
    }

    console.log(`Seeded ${results.length} students successfully!`);
    return results;
  } catch (error) {
    console.error("Error seeding students:", error);
    throw error;
  }
}