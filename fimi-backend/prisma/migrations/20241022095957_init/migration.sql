-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `fullname` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'USER') NOT NULL DEFAULT 'USER',
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `dateOfBirth` DATETIME(3) NOT NULL,
    `placeOfBirth` VARCHAR(191) NOT NULL,
    `gender` ENUM('MALE', 'FEMALE') NOT NULL,
    `maritialStatus` ENUM('SINGLE', 'MARRIED', 'DIVORCED', 'WIDOW') NOT NULL DEFAULT 'SINGLE',
    `citizenIdentifier` VARCHAR(191) NOT NULL,
    `dateOfIssued` DATETIME(3) NOT NULL,
    `placeOfIssued` VARCHAR(191) NOT NULL,
    `nation` VARCHAR(191) NOT NULL,
    `currentAddress` VARCHAR(191) NOT NULL,
    `currentWard` VARCHAR(191) NOT NULL,
    `curentDistrict` VARCHAR(191) NOT NULL,
    `currentprovince` VARCHAR(191) NOT NULL,
    `bankAccountName` VARCHAR(191) NOT NULL,
    `bankAccountNumber` VARCHAR(191) NOT NULL,
    `bankName` VARCHAR(191) NOT NULL,
    `position` ENUM('COLLABORATOR', 'FINANCE_CONSULTANT', 'AREA_SALES_DIRECTOR', 'REGIONAL_DIRIECTOR', 'BRANCH_DIRECTOR', 'MERCHANT') NOT NULL DEFAULT 'COLLABORATOR',
    `department` ENUM('BOARD_OF_DIRECTORS', 'OPERATIONS', 'MARKETING', 'SALES', 'IT') NOT NULL DEFAULT 'SALES',
    `team` ENUM('HUMAN_RESOURCES', 'ACCOUNTANT', 'LEGAL', 'FINTECH', 'INSURTECH', 'PARTNERSHIP') NOT NULL DEFAULT 'FINTECH',
    `workStaus` ENUM('WORKING', 'OFF') NOT NULL DEFAULT 'WORKING',
    `documentStatus` ENUM('ADDITIONAL', 'NO_ADDITIONAL') NOT NULL DEFAULT 'NO_ADDITIONAL',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `managerId` VARCHAR(191) NULL,

    UNIQUE INDEX `User_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserDocument` (
    `id` VARCHAR(191) NOT NULL,
    `citizenIdentifierFront` VARCHAR(191) NOT NULL,
    `citizenIdentifierBack` VARCHAR(191) NOT NULL,
    `portrait` VARCHAR(191) NOT NULL,
    `contracType` ENUM('EMPLOYMENT_CONTRACT', 'SERVICE_CONTRACT') NOT NULL DEFAULT 'SERVICE_CONTRACT',
    `contract` VARCHAR(191) NOT NULL,
    `contractStartAt` DATETIME(3) NOT NULL,
    `contractEndAt` DATETIME(3) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `UserDocument_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Partner` (
    `id` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `type` ENUM('MERCHANT', 'DISTRIBUTOR') NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'USER') NOT NULL DEFAULT 'USER',
    `password` VARCHAR(191) NOT NULL,
    `dateOfEstablishment` DATETIME(3) NOT NULL,
    `taxCode` VARCHAR(191) NOT NULL,
    `bankAccountName` VARCHAR(191) NOT NULL,
    `bankAccountNumber` VARCHAR(191) NOT NULL,
    `bankName` VARCHAR(191) NOT NULL,
    `companyAddress` VARCHAR(191) NOT NULL,
    `companyWard` VARCHAR(191) NOT NULL,
    `companyDistrict` VARCHAR(191) NOT NULL,
    `companyprovince` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `website` VARCHAR(191) NOT NULL,
    `representative` VARCHAR(191) NOT NULL,
    `representativeGender` ENUM('MALE', 'FEMALE') NOT NULL,
    `representativeDoB` DATETIME(3) NOT NULL,
    `representativeNation` VARCHAR(191) NOT NULL,
    `representativeNational` VARCHAR(191) NOT NULL,
    `representativeDocType` ENUM('CITIZEN_IDENTIFIER', 'PASSPORT') NOT NULL DEFAULT 'CITIZEN_IDENTIFIER',
    `representativeDocNumber` VARCHAR(191) NOT NULL,
    `representativeDocDoI` DATETIME(3) NOT NULL,
    `representativeDocPoI` VARCHAR(191) NOT NULL,
    `representativeCurrentAddress` VARCHAR(191) NOT NULL,
    `representativeCurrentWard` VARCHAR(191) NOT NULL,
    `representativeCurentDistrict` VARCHAR(191) NOT NULL,
    `representativeCurrentprovince` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `uodatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Partner_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PartnerDocument` (
    `id` VARCHAR(191) NOT NULL,
    `businessLicense` VARCHAR(191) NOT NULL,
    `contracType` ENUM('EMPLOYMENT_CONTRACT', 'SERVICE_CONTRACT') NOT NULL DEFAULT 'SERVICE_CONTRACT',
    `contract` VARCHAR(191) NOT NULL,
    `contractStartAt` DATETIME(3) NOT NULL,
    `contractEndAt` DATETIME(3) NOT NULL,
    `partnerId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `PartnerDocument_partnerId_key`(`partnerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_managerId_fkey` FOREIGN KEY (`managerId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserDocument` ADD CONSTRAINT `UserDocument_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PartnerDocument` ADD CONSTRAINT `PartnerDocument_partnerId_fkey` FOREIGN KEY (`partnerId`) REFERENCES `Partner`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
