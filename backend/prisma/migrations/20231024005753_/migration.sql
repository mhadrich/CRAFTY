/*
  Warnings:

  - You are about to drop the `orderitem` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `addressId` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `orderitem` DROP FOREIGN KEY `OrderItem_itemId_fkey`;

-- DropForeignKey
ALTER TABLE `orderitem` DROP FOREIGN KEY `OrderItem_orderId_fkey`;

-- AlterTable
ALTER TABLE `order` ADD COLUMN `addressId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `orderitem`;

-- CreateTable
CREATE TABLE `PaymentCard` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cardNumber` VARCHAR(191) NOT NULL,
    `expiryDate` VARCHAR(191) NOT NULL,
    `cvv` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PaymentCard` ADD CONSTRAINT `PaymentCard_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `Adress`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
