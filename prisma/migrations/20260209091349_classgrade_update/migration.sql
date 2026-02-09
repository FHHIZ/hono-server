/*
  Warnings:

  - You are about to drop the column `class_number` on the `Class` table. All the data in the column will be lost.
  - You are about to alter the column `major` on the `Class` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(1))` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Class` DROP COLUMN `class_number`,
    MODIFY `major` VARCHAR(191) NOT NULL;
