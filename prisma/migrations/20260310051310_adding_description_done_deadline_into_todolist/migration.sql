-- AlterTable
ALTER TABLE `TodoList` ADD COLUMN `deadline` DATETIME(3) NULL,
    ADD COLUMN `description` VARCHAR(191) NULL,
    ADD COLUMN `done` BOOLEAN NULL DEFAULT false;
