/*
  Warnings:

  - You are about to drop the column `class` on the `Class` table. All the data in the column will be lost.
  - Added the required column `classes` to the `Class` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Class` DROP COLUMN `class`,
    ADD COLUMN `classes` ENUM('X', 'XI', 'XII') NOT NULL;
