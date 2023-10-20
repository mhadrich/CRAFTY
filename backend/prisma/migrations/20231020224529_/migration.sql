/*
  Warnings:

  - You are about to drop the column `articleId` on the `comment` table. All the data in the column will be lost.
  - You are about to drop the column `itemId` on the `comment` table. All the data in the column will be lost.
  - You are about to drop the `_itemtoorder` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_itemtoorder` DROP FOREIGN KEY `_ItemToOrder_A_fkey`;

-- DropForeignKey
ALTER TABLE `_itemtoorder` DROP FOREIGN KEY `_ItemToOrder_B_fkey`;

-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `Comment_articleId_fkey`;

-- AlterTable
ALTER TABLE `comment` DROP COLUMN `articleId`,
    DROP COLUMN `itemId`;

-- DropTable
DROP TABLE `_itemtoorder`;

-- CreateTable
CREATE TABLE `OrderItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `itemId` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `orderId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ArticleToComment` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ArticleToComment_AB_unique`(`A`, `B`),
    INDEX `_ArticleToComment_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `OrderItem` ADD CONSTRAINT `OrderItem_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderItem` ADD CONSTRAINT `OrderItem_itemId_fkey` FOREIGN KEY (`itemId`) REFERENCES `Item`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ArticleToComment` ADD CONSTRAINT `_ArticleToComment_A_fkey` FOREIGN KEY (`A`) REFERENCES `Article`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ArticleToComment` ADD CONSTRAINT `_ArticleToComment_B_fkey` FOREIGN KEY (`B`) REFERENCES `Comment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
