/*
  Warnings:

  - You are about to drop the column `description` on the `Absence` table. All the data in the column will be lost.
  - You are about to drop the column `has_todo` on the `Absence` table. All the data in the column will be lost.
  - You are about to alter the column `status` on the `Absence` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `Enum(EnumId(1))`.
  - You are about to alter the column `major` on the `Class` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `academicYear` on the `Class` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(9)`.
  - You are about to drop the column `student_id` on the `TodoList` table. All the data in the column will be lost.
  - You are about to drop the column `email_verified_at` on the `Users` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(64)`.
  - You are about to alter the column `password` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(128)`.
  - You are about to alter the column `role` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(2))` to `Enum(EnumId(0))`.
  - A unique constraint covering the columns `[student_id,absence_date]` on the table `Absence` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nis]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `absence_date` to the `Absence` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resubmitAt` to the `Absence` table without a default value. This is not possible if the table is not empty.
  - Made the column `absence_time` on table `Absence` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `absence_id` to the `TodoList` table without a default value. This is not possible if the table is not empty.
  - Made the column `slug` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `TodoList` DROP FOREIGN KEY `TodoList_student_id_fkey`;

-- DropIndex
DROP INDEX `TodoList_student_id_fkey` ON `TodoList`;

-- AlterTable
ALTER TABLE `Absence` DROP COLUMN `description`,
    DROP COLUMN `has_todo`,
    ADD COLUMN `absence_date` DATE NOT NULL,
    ADD COLUMN `resubmitAt` TIME NOT NULL,
    ADD COLUMN `teacher_note` VARCHAR(255) NULL,
    MODIFY `absence_time` TIME NOT NULL,
    MODIFY `status` ENUM('PRESENT', 'LATE', 'LEAVE', 'SICK', 'ABSENT') NOT NULL DEFAULT 'ABSENT';

-- AlterTable
ALTER TABLE `Class` MODIFY `major` VARCHAR(100) NOT NULL,
    MODIFY `academicYear` VARCHAR(9) NOT NULL;

-- AlterTable
ALTER TABLE `Student` MODIFY `nis` VARCHAR(20) NOT NULL;

-- AlterTable
ALTER TABLE `TodoList` DROP COLUMN `student_id`,
    ADD COLUMN `absence_id` VARCHAR(191) NOT NULL,
    MODIFY `activity` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `Users` DROP COLUMN `email_verified_at`,
    ADD COLUMN `last_password_updateAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `name` VARCHAR(64) NOT NULL,
    MODIFY `password` VARCHAR(128) NOT NULL,
    MODIFY `role` ENUM('ADMIN', 'TEACHER', 'STUDENT', 'UNREGISTERED') NOT NULL DEFAULT 'UNREGISTERED',
    MODIFY `slug` VARCHAR(10) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Absence_student_id_absence_date_key` ON `Absence`(`student_id`, `absence_date`);

-- CreateIndex
CREATE UNIQUE INDEX `Student_nis_key` ON `Student`(`nis`);

-- AddForeignKey
ALTER TABLE `TodoList` ADD CONSTRAINT `TodoList_absence_id_fkey` FOREIGN KEY (`absence_id`) REFERENCES `Absence`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
