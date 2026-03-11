/*
  Warnings:

  - You are about to drop the column `classes` on the `Class` table. All the data in the column will be lost.
  - You are about to alter the column `role` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(1))` to `Enum(EnumId(0))`.
  - A unique constraint covering the columns `[academicYear,major,classNumber]` on the table `Class` will be added. If there are existing duplicate values, this will fail.
  - Made the column `classNumber` on table `Class` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Class` DROP COLUMN `classes`,
    MODIFY `classNumber` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Users` MODIFY `role` ENUM('ADMIN', 'TEACHER', 'STUDENT') NOT NULL DEFAULT 'STUDENT';

-- CreateIndex
CREATE UNIQUE INDEX `Class_academicYear_major_classNumber_key` ON `Class`(`academicYear`, `major`, `classNumber`);
