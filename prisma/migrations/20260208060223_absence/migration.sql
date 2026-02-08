-- AlterTable
ALTER TABLE `absences` MODIFY `date` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `absence_time` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `status` ENUM('present', 'onLeave', 'ill', 'unexcused') NOT NULL DEFAULT 'unexcused';

-- AlterTable
ALTER TABLE `users` MODIFY `role` ENUM('admin', 'teacher', 'student', 'unregistered') NOT NULL DEFAULT 'unregistered';
