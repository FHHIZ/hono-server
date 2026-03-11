/*
  Warnings:

  - You are about to alter the column `major` on the `Class` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(3)`.

*/
-- AlterTable
ALTER TABLE `Class` ADD COLUMN `classNumber` INTEGER NULL,
    MODIFY `major` VARCHAR(3) NOT NULL,
    MODIFY `classes` ENUM('X', 'XI', 'XII') NULL;
