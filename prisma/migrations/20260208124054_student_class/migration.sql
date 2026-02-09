/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `student_class` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `student_class_user_id_key` ON `student_class`(`user_id`);
