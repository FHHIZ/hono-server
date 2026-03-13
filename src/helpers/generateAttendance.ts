import { AbsencesService } from "../core/absence/absences.service.js";
import { StudentService } from "../core/student/student.service.js";
import type { AttendanceStatus } from "../generated/prisma/index.js";
import { DateHelpers } from "./dateWIB.js";

export const generateDailyAbsence = async () => {
  console.log("Generate absences every running.");

  const { GetTimeRangeWib } = DateHelpers();
  const { end } = GetTimeRangeWib();

  // Jika hari ini Minggu (0) atau Sabtu (6), hentikan proses
  const day = new Date().getDay();
  if (day === 0 || day === 6)
    if (day === 0 || day === 6) {
      return console.log(`Absences is unavailable during weekends`);
    }

  // 1. Cek apakah hari ini sudah pernah di-generate (mencegah duplikat saat restart)
  const existingAbsences = await AbsencesService.IsInitialAbsencesExistToday();

  if (existingAbsences) {
    console.log("Today absences is available, stopping the process...");
    return;
  }

  // 2. Ambil semua User yang rolenya 'STUDENT' dan punya relasi 'student' (student_id)
  const students = await StudentService.FindActiveStudentAccounts();

  if (students.length === 0) {
    console.log("Student is unavailable");
    return;
  }

  // 4. Eksekusi Bulk Insert
  const data = await AbsencesService.CreateManyInitialAbsences(
    students.map((u) => u.student?.id!),
  );

  console.log(`Successfuly generate ${data.count} absences template.`);
};
