/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Users` ADD COLUMN `slug` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Users_slug_key` ON `Users`(`slug`);
