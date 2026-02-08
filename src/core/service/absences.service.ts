import type { Status } from "../../generated/prisma/index.js";
import { prisma } from "../../middleware/client.js";
import type { updateAbsen } from "../../type/type.js";

export const AbsencesService = {
  findById: (data: string) => {
    return prisma.absences.findUnique({ where: { id: data } });
  },

  createAbsen: (data: { student_class_id: string, status: Status }) => {
    return prisma.absences.create({ data });
  },

  findAllAbsen: (query?: Status|undefined) => {
    return prisma.absences.findMany({
      where: query
        ? {
            status: {
              equals: query,
            }
          }
        : undefined,
    })
  },  

    findOneAbsen: (id: string) => {
    return prisma.absences.findMany({
      where: { id: id },
    })
  },

  updateAbsen: (id: string, body: updateAbsen) => {
    return prisma.absences.update({
      where: {id: id},
      data: body,
    })
  },
};
