/*
  Warnings:

  - You are about to drop the column `student_class_id` on the `Absence` table. All the data in the column will be lost.
  - You are about to drop the column `student_class_id` on the `TodoList` table. All the data in the column will be lost.
  - Added the required column `student_id` to the `Absence` table without a default value. This is not possible if the table is not empty.
  - Added the required column `student_id` to the `TodoList` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Absence` DROP FOREIGN KEY `Absence_student_class_id_fkey`;

-- DropForeignKey
ALTER TABLE `TodoList` DROP FOREIGN KEY `TodoList_student_class_id_fkey`;

-- DropIndex
DROP INDEX `Absence_student_class_id_fkey` ON `Absence`;

-- DropIndex
DROP INDEX `TodoList_student_class_id_fkey` ON `TodoList`;

-- AlterTable
ALTER TABLE `Absence` DROP COLUMN `student_class_id`,
    ADD COLUMN `description` VARCHAR(191) NULL,
    ADD COLUMN `student_id` VARCHAR(191) NOT NULL,
    ALTER COLUMN `absence_time` DROP DEFAULT;

-- AlterTable
ALTER TABLE `TodoList` DROP COLUMN `student_class_id`,
    ADD COLUMN `student_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Absence` ADD CONSTRAINT `Absence_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `Student`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TodoList` ADD CONSTRAINT `TodoList_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `Student`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
