import { AbsencesService } from "../core/absence/absences.service.js";
import { StudentService } from "../core/student/student.service.js";
import type { Status } from "../generated/prisma/index.js";
import { getTimeWIB, getTodayRangeWIB } from "./todayTime.js";

export const generateDailyAbsence = async () => {
  console.log("Generate absences every running.");
  const { start, end } = getTodayRangeWIB();

  const today = getTimeWIB();
  const day = today.getDay(); // 0=minggu, 6=sabtu

  // Jika hari ini Minggu (0) atau Sabtu (6), hentikan proses
  if (day === 0 || day === 6) {
    return console.log(`Stopped the process because today is ${day}`);
  }

  // 1. Cek apakah hari ini sudah pernah di-generate (mencegah duplikat saat restart)
  const existingAbsences = await AbsencesService.checkAbsenceToday(start, end);

  if (existingAbsences) {
    console.log("Today absences is available, stopping the process...");
    return;
  }

  // 2. Ambil semua User yang rolenya 'STUDENT' dan punya relasi 'student' (student_id)
  const students = await StudentService.findAllStudent();

  if (students.length === 0) {
    console.log("Student is unavailable");
    return;
  }

  // 3. Siapkan data untuk CreateMany
  const dataToInsert = students.map((u) => ({
    student_id: u.id,
    status: "unexcused" as Status, // Default: Alpha
    absence_time: start,
    has_todo: false,
  }));

  // 4. Eksekusi Bulk Insert
  await AbsencesService.createMany(dataToInsert);

  console.log(`Successfuly generate ${dataToInsert.length} absences template.`);
};
