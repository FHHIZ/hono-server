-- DropForeignKey
ALTER TABLE `TodoList` DROP FOREIGN KEY `TodoList_absence_id_fkey`;

-- DropIndex
DROP INDEX `TodoList_absence_id_fkey` ON `TodoList`;

-- AddForeignKey
ALTER TABLE `TodoList` ADD CONSTRAINT `TodoList_absence_id_fkey` FOREIGN KEY (`absence_id`) REFERENCES `Absence`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
