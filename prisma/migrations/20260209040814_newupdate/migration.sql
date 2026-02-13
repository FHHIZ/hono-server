/*
  Warnings:

  - You are about to drop the `absences` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `classes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `student_class` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `todo_lists` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `absences` DROP FOREIGN KEY `absences_student_class_id_fkey`;

-- DropForeignKey
ALTER TABLE `student_class` DROP FOREIGN KEY `student_class_class_id_fkey`;

-- DropForeignKey
ALTER TABLE `student_class` DROP FOREIGN KEY `student_class_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `todo_lists` DROP FOREIGN KEY `todo_lists_student_class_id_fkey`;

-- DropTable
DROP TABLE `absences`;

-- DropTable
DROP TABLE `classes`;

-- DropTable
DROP TABLE `student_class`;

-- DropTable
DROP TABLE `todo_lists`;

-- DropTable
DROP TABLE `users`;

-- CreateTable
CREATE TABLE `Users` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `email_verified_at` DATETIME(3) NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('admin', 'teacher', 'student', 'unregistered') NOT NULL DEFAULT 'unregistered',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Student` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `class_id` VARCHAR(191) NOT NULL,
    `nis` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Student_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Absence` (
    `id` VARCHAR(191) NOT NULL,
    `student_class_id` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `absence_time` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `status` ENUM('present', 'onLeave', 'ill', 'unexcused') NOT NULL DEFAULT 'unexcused',
    `has_todo` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TodoList` (
    `id` VARCHAR(191) NOT NULL,
    `student_class_id` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `activity` VARCHAR(191) NOT NULL,
    `submitted_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Class` (
    `id` VARCHAR(191) NOT NULL,
    `class` ENUM('X', 'XI', 'XII') NOT NULL,
    `major` ENUM('TITL', 'TOI', 'TAV', 'TKJ', 'RPL', 'DKV') NOT NULL,
    `class_number` ENUM('One', 'Two', 'Three', 'Four', 'Five') NOT NULL,
    `academicYear` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_class_id_fkey` FOREIGN KEY (`class_id`) REFERENCES `Class`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Absence` ADD CONSTRAINT `Absence_student_class_id_fkey` FOREIGN KEY (`student_class_id`) REFERENCES `Student`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TodoList` ADD CONSTRAINT `TodoList_student_class_id_fkey` FOREIGN KEY (`student_class_id`) REFERENCES `Student`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
