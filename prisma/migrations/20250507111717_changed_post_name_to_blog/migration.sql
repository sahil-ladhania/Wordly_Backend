/*
  Warnings:

  - You are about to drop the column `postId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `Reaction` table. All the data in the column will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `blogId` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `blogId` to the `Reaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Comment` DROP FOREIGN KEY `Comment_postId_fkey`;

-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `Reaction` DROP FOREIGN KEY `Reaction_postId_fkey`;

-- DropIndex
DROP INDEX `Comment_postId_fkey` ON `Comment`;

-- DropIndex
DROP INDEX `Reaction_postId_fkey` ON `Reaction`;

-- AlterTable
ALTER TABLE `Comment` DROP COLUMN `postId`,
    ADD COLUMN `blogId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Reaction` DROP COLUMN `postId`,
    ADD COLUMN `blogId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `Post`;

-- CreateTable
CREATE TABLE `Blog` (
    `blogId` INTEGER NOT NULL AUTO_INCREMENT,
    `imageLink` VARCHAR(191) NULL,
    `title` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `authorId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`blogId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Blog` ADD CONSTRAINT `Blog_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_blogId_fkey` FOREIGN KEY (`blogId`) REFERENCES `Blog`(`blogId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reaction` ADD CONSTRAINT `Reaction_blogId_fkey` FOREIGN KEY (`blogId`) REFERENCES `Blog`(`blogId`) ON DELETE CASCADE ON UPDATE CASCADE;
