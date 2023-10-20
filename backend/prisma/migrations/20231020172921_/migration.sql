/*
  Warnings:

  - You are about to drop the column `articleId` on the `image` table. All the data in the column will be lost.
  - You are about to drop the column `itemId` on the `image` table. All the data in the column will be lost.
  - You are about to drop the column `reviewId` on the `image` table. All the data in the column will be lost.
  - You are about to drop the column `itemId` on the `tag` table. All the data in the column will be lost.
  - You are about to drop the `_itemtomaterial` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `material` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_itemtomaterial` DROP FOREIGN KEY `_ItemToMaterial_A_fkey`;

-- DropForeignKey
ALTER TABLE `_itemtomaterial` DROP FOREIGN KEY `_ItemToMaterial_B_fkey`;

-- DropForeignKey
ALTER TABLE `image` DROP FOREIGN KEY `Image_articleId_fkey`;

-- DropForeignKey
ALTER TABLE `image` DROP FOREIGN KEY `Image_itemId_fkey`;

-- DropForeignKey
ALTER TABLE `image` DROP FOREIGN KEY `Image_reviewId_fkey`;

-- DropForeignKey
ALTER TABLE `tag` DROP FOREIGN KEY `Tag_itemId_fkey`;

-- DropIndex
DROP INDEX `Comment_itemId_fkey` ON `comment`;

-- AlterTable
ALTER TABLE `image` DROP COLUMN `articleId`,
    DROP COLUMN `itemId`,
    DROP COLUMN `reviewId`;

-- AlterTable
ALTER TABLE `tag` DROP COLUMN `itemId`;

-- DropTable
DROP TABLE `_itemtomaterial`;

-- DropTable
DROP TABLE `material`;

-- CreateTable
CREATE TABLE `_ArticleToImage` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ArticleToImage_AB_unique`(`A`, `B`),
    INDEX `_ArticleToImage_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ImageToReview` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ImageToReview_AB_unique`(`A`, `B`),
    INDEX `_ImageToReview_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ImageToItem` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ImageToItem_AB_unique`(`A`, `B`),
    INDEX `_ImageToItem_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ItemToTag` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ItemToTag_AB_unique`(`A`, `B`),
    INDEX `_ItemToTag_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_ArticleToImage` ADD CONSTRAINT `_ArticleToImage_A_fkey` FOREIGN KEY (`A`) REFERENCES `Article`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ArticleToImage` ADD CONSTRAINT `_ArticleToImage_B_fkey` FOREIGN KEY (`B`) REFERENCES `Image`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ImageToReview` ADD CONSTRAINT `_ImageToReview_A_fkey` FOREIGN KEY (`A`) REFERENCES `Image`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ImageToReview` ADD CONSTRAINT `_ImageToReview_B_fkey` FOREIGN KEY (`B`) REFERENCES `Review`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ImageToItem` ADD CONSTRAINT `_ImageToItem_A_fkey` FOREIGN KEY (`A`) REFERENCES `Image`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ImageToItem` ADD CONSTRAINT `_ImageToItem_B_fkey` FOREIGN KEY (`B`) REFERENCES `Item`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ItemToTag` ADD CONSTRAINT `_ItemToTag_A_fkey` FOREIGN KEY (`A`) REFERENCES `Item`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ItemToTag` ADD CONSTRAINT `_ItemToTag_B_fkey` FOREIGN KEY (`B`) REFERENCES `Tag`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
