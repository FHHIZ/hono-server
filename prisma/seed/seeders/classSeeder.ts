import { PrismaClient } from "@prisma/client";
import type { Class } from "../../../src/generated/prisma/index.js";

const prisma = new PrismaClient();

async function createClass() {
  const T = new Date();
  const date = T.getDate();
  const month = T.getMonth();
  const year = T.getFullYear();

  let startYear;
  let endYear;
  if (month > 4 || (month == 4 && date >= 5)) {
    startYear = year;
    endYear = year + 1;
  } else {
    startYear = year - 1;
    endYear = year;
  }
  const setYear = `${startYear}/${endYear}`;

  return [
    {
      major: "RPL",
      academicYear: setYear,
      classNumber: 1,
    },
    {
      major: "RPL",
      academicYear: setYear,
      classNumber: 2,
    },
    {
      major: "RPL",
      academicYear: setYear,
      classNumber: 3,
    },
    {
      major: "DKV",
      academicYear: setYear,
      classNumber: 1,
    },
    {
      major: "DKV",
      academicYear: setYear,
      classNumber: 2,
    },
    {
      major: "TKJ",
      academicYear: setYear,
      classNumber: 1,
    },
    {
      major: "TKJ",
      academicYear: setYear,
      classNumber: 2,
    },
    {
      major: "TAV",
      academicYear: setYear,
      classNumber: 1,
    },
    {
      major: "TOI",
      academicYear: setYear,
      classNumber: 1,
    },
    {
      major: "TITL",
      academicYear: setYear,
      classNumber: 1,
    },
  ];
}

export async function seedClass(): Promise<Class[]> {
  try {
    const classData = await createClass();
    const seededClasses = [];

    for (const item of classData) {
      const data = await prisma.class.upsert({
        where: {
          class: {
            major: item.major,
            academicYear: item.academicYear,
            classNumber: item.classNumber,
          },
        },
        update: {},
        create: item,
      });

      seededClasses.push(data);
    }
    return seededClasses;
  } catch (error) {
    console.error("Error seeding classes:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
