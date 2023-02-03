/*
 Navicat Premium Data Transfer

 Source Server         : windows
 Source Server Type    : MySQL
 Source Server Version : 80032
 Source Host           : localhost:3306
 Source Schema         : tienda

 Target Server Type    : MySQL
 Target Server Version : 80032
 File Encoding         : 65001

 Date: 03/02/2023 15:39:35
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for businesses
-- ----------------------------
DROP TABLE IF EXISTS `businesses`;
CREATE TABLE `businesses`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `company` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `street` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `postalCode` int NOT NULL,
  `city` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `country` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `phone` int NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `timeTable` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `opening` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `cif` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of businesses
-- ----------------------------

-- ----------------------------
-- Table structure for cart_details
-- ----------------------------
DROP TABLE IF EXISTS `cart_details`;
CREATE TABLE `cart_details`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `shoppingCartsId` int NULL DEFAULT NULL,
  `productsId` int NULL DEFAULT NULL,
  `price` decimal(6, 2) NOT NULL,
  `measureUnit` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `productName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `taxeType` int NOT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `shoppingCartsId`(`shoppingCartsId`) USING BTREE,
  INDEX `productsId`(`productsId`) USING BTREE,
  CONSTRAINT `cart_details_ibfk_1` FOREIGN KEY (`shoppingCartsId`) REFERENCES `shopping_carts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `cart_details_ibfk_2` FOREIGN KEY (`productsId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of cart_details
-- ----------------------------

-- ----------------------------
-- Table structure for contacts
-- ----------------------------
DROP TABLE IF EXISTS `contacts`;
CREATE TABLE `contacts`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `surname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `phone` int NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `message` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `fingerprintsId` int NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fingerprintsId`(`fingerprintsId`) USING BTREE,
  CONSTRAINT `contacts_ibfk_1` FOREIGN KEY (`fingerprintsId`) REFERENCES `fingerprints` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of contacts
-- ----------------------------

-- ----------------------------
-- Table structure for customers
-- ----------------------------
DROP TABLE IF EXISTS `customers`;
CREATE TABLE `customers`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `surname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `phone` int NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `city` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `postalCode` int NOT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of customers
-- ----------------------------

-- ----------------------------
-- Table structure for emails
-- ----------------------------
DROP TABLE IF EXISTS `emails`;
CREATE TABLE `emails`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `message` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of emails
-- ----------------------------

-- ----------------------------
-- Table structure for faqs
-- ----------------------------
DROP TABLE IF EXISTS `faqs`;
CREATE TABLE `faqs`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `question` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `answer` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of faqs
-- ----------------------------

-- ----------------------------
-- Table structure for fingerprints
-- ----------------------------
DROP TABLE IF EXISTS `fingerprints`;
CREATE TABLE `fingerprints`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `customerId` int NULL DEFAULT NULL,
  `fingerprint` int NOT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `customerId`(`customerId`) USING BTREE,
  CONSTRAINT `fingerprints_ibfk_1` FOREIGN KEY (`customerId`) REFERENCES `customers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of fingerprints
-- ----------------------------

-- ----------------------------
-- Table structure for image_configurations
-- ----------------------------
DROP TABLE IF EXISTS `image_configurations`;
CREATE TABLE `image_configurations`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `entity` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `directory` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `grid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `contentAccepted` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `extensionConversion` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `widthPx` int NOT NULL,
  `heightPx` int NOT NULL,
  `quality` int NOT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of image_configurations
-- ----------------------------

-- ----------------------------
-- Table structure for languages
-- ----------------------------
DROP TABLE IF EXISTS `languages`;
CREATE TABLE `languages`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `visible` tinyint(1) NOT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of languages
-- ----------------------------

-- ----------------------------
-- Table structure for locales
-- ----------------------------
DROP TABLE IF EXISTS `locales`;
CREATE TABLE `locales`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `languageAlias` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `entity` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `entityKey` int NOT NULL,
  `key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of locales
-- ----------------------------

-- ----------------------------
-- Table structure for menus
-- ----------------------------
DROP TABLE IF EXISTS `menus`;
CREATE TABLE `menus`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `customUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `order` int NULL DEFAULT 1,
  `parentId` int NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `parentId`(`parentId`) USING BTREE,
  CONSTRAINT `menus_ibfk_1` FOREIGN KEY (`parentId`) REFERENCES `menus` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of menus
-- ----------------------------
INSERT INTO `menus` VALUES (1, 'admin-header', NULL, 1, NULL, '2023-01-30 13:23:35', '2023-01-30 13:23:35', NULL);
INSERT INTO `menus` VALUES (2, 'lo que sea', '', 1, 1, '2023-01-30 13:28:11', '2023-01-30 13:28:11', NULL);
INSERT INTO `menus` VALUES (3, 'opciones', '', 1, 2, '2023-01-30 14:26:33', '2023-01-30 14:26:33', NULL);
INSERT INTO `menus` VALUES (4, 'usuarios', '/api/admin/users', 1, 2, '2023-01-31 15:58:25', '2023-01-31 15:58:25', NULL);
INSERT INTO `menus` VALUES (5, 'otros', '/api/admin/users', 1, 2, '2023-02-02 16:13:57', '2023-02-02 16:13:57', NULL);

-- ----------------------------
-- Table structure for payment_methods
-- ----------------------------
DROP TABLE IF EXISTS `payment_methods`;
CREATE TABLE `payment_methods`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `visible` tinyint(1) NOT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of payment_methods
-- ----------------------------

-- ----------------------------
-- Table structure for product_categories
-- ----------------------------
DROP TABLE IF EXISTS `product_categories`;
CREATE TABLE `product_categories`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `visible` tinyint(1) NOT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of product_categories
-- ----------------------------

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `price` int NOT NULL,
  `taxesId` int NULL DEFAULT NULL,
  `featured` tinyint(1) NOT NULL,
  `productCategoriesId` int NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `taxesId`(`taxesId`) USING BTREE,
  INDEX `productCategoriesId`(`productCategoriesId`) USING BTREE,
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`taxesId`) REFERENCES `taxes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`productCategoriesId`) REFERENCES `product_categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of products
-- ----------------------------

-- ----------------------------
-- Table structure for refund_details
-- ----------------------------
DROP TABLE IF EXISTS `refund_details`;
CREATE TABLE `refund_details`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `refundsId` int NULL DEFAULT NULL,
  `productsId` int NULL DEFAULT NULL,
  `amount` int NOT NULL,
  `price` decimal(6, 2) NOT NULL,
  `measureUnit` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `productName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `taxesType` int NOT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `refundsId`(`refundsId`) USING BTREE,
  INDEX `productsId`(`productsId`) USING BTREE,
  CONSTRAINT `refund_details_ibfk_1` FOREIGN KEY (`refundsId`) REFERENCES `refunds` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `refund_details_ibfk_2` FOREIGN KEY (`productsId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of refund_details
-- ----------------------------

-- ----------------------------
-- Table structure for refunds
-- ----------------------------
DROP TABLE IF EXISTS `refunds`;
CREATE TABLE `refunds`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `shoppingCartsId` int NULL DEFAULT NULL,
  `customersId` int NULL DEFAULT NULL,
  `paymentMethodsId` int NULL DEFAULT NULL,
  `totalPrice` decimal(10, 2) NOT NULL,
  `basePriceTotal` decimal(10, 2) NOT NULL,
  `ivaPriceTotal` decimal(10, 2) NOT NULL,
  `dateEmision` date NOT NULL,
  `hourEmision` time(0) NOT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `shoppingCartsId`(`shoppingCartsId`) USING BTREE,
  INDEX `customersId`(`customersId`) USING BTREE,
  INDEX `paymentMethodsId`(`paymentMethodsId`) USING BTREE,
  CONSTRAINT `refunds_ibfk_1` FOREIGN KEY (`shoppingCartsId`) REFERENCES `shopping_carts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `refunds_ibfk_2` FOREIGN KEY (`customersId`) REFERENCES `customers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `refunds_ibfk_3` FOREIGN KEY (`paymentMethodsId`) REFERENCES `payment_methods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of refunds
-- ----------------------------

-- ----------------------------
-- Table structure for resized_images
-- ----------------------------
DROP TABLE IF EXISTS `resized_images`;
CREATE TABLE `resized_images`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `sourceImagesId` int NULL DEFAULT NULL,
  `imageConfigurationsId` int NULL DEFAULT NULL,
  `titleText` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `altText` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `entity` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `entityKey` int NOT NULL,
  `languageAlias` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `filename` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `mimeType` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `grid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `sizeBytes` int NOT NULL,
  `widthPx` int NOT NULL,
  `heightPx` int NOT NULL,
  `quality` int NOT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `sourceImagesId`(`sourceImagesId`) USING BTREE,
  INDEX `imageConfigurationsId`(`imageConfigurationsId`) USING BTREE,
  CONSTRAINT `resized_images_ibfk_1` FOREIGN KEY (`sourceImagesId`) REFERENCES `source_images` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `resized_images_ibfk_2` FOREIGN KEY (`imageConfigurationsId`) REFERENCES `image_configurations` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of resized_images
-- ----------------------------

-- ----------------------------
-- Table structure for sale_details
-- ----------------------------
DROP TABLE IF EXISTS `sale_details`;
CREATE TABLE `sale_details`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `salesId` int NULL DEFAULT NULL,
  `productsId` int NULL DEFAULT NULL,
  `amount` int NOT NULL,
  `price` decimal(6, 2) NOT NULL,
  `measureUnit` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `productName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `taxesType` int NOT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `salesId`(`salesId`) USING BTREE,
  INDEX `productsId`(`productsId`) USING BTREE,
  CONSTRAINT `sale_details_ibfk_1` FOREIGN KEY (`salesId`) REFERENCES `sales` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `sale_details_ibfk_2` FOREIGN KEY (`productsId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sale_details
-- ----------------------------

-- ----------------------------
-- Table structure for sale_errors
-- ----------------------------
DROP TABLE IF EXISTS `sale_errors`;
CREATE TABLE `sale_errors`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `paymentMethodsId` int NULL DEFAULT NULL,
  `customersId` int NULL DEFAULT NULL,
  `shoppingCartsId` int NULL DEFAULT NULL,
  `errorCode` int NOT NULL,
  `errorMessage` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `paymentMethodsId`(`paymentMethodsId`) USING BTREE,
  INDEX `customersId`(`customersId`) USING BTREE,
  INDEX `shoppingCartsId`(`shoppingCartsId`) USING BTREE,
  CONSTRAINT `sale_errors_ibfk_1` FOREIGN KEY (`paymentMethodsId`) REFERENCES `payment_methods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `sale_errors_ibfk_2` FOREIGN KEY (`customersId`) REFERENCES `customers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `sale_errors_ibfk_3` FOREIGN KEY (`shoppingCartsId`) REFERENCES `shopping_carts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sale_errors
-- ----------------------------

-- ----------------------------
-- Table structure for sales
-- ----------------------------
DROP TABLE IF EXISTS `sales`;
CREATE TABLE `sales`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `shoppingCartsId` int NULL DEFAULT NULL,
  `customersId` int NULL DEFAULT NULL,
  `paymentMethodsId` int NULL DEFAULT NULL,
  `totalPrice` decimal(10, 2) NOT NULL,
  `basePriceTotal` decimal(10, 2) NOT NULL,
  `ivaPriceTotal` decimal(10, 2) NOT NULL,
  `dateEmision` date NOT NULL,
  `hourEmision` time(0) NOT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `shoppingCartsId`(`shoppingCartsId`) USING BTREE,
  INDEX `customersId`(`customersId`) USING BTREE,
  INDEX `paymentMethodsId`(`paymentMethodsId`) USING BTREE,
  CONSTRAINT `sales_ibfk_1` FOREIGN KEY (`shoppingCartsId`) REFERENCES `shopping_carts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `sales_ibfk_2` FOREIGN KEY (`customersId`) REFERENCES `customers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `sales_ibfk_3` FOREIGN KEY (`paymentMethodsId`) REFERENCES `payment_methods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sales
-- ----------------------------

-- ----------------------------
-- Table structure for sequelizemeta
-- ----------------------------
DROP TABLE IF EXISTS `sequelizemeta`;
CREATE TABLE `sequelizemeta`  (
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb3 COLLATE = utf8mb3_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sequelizemeta
-- ----------------------------
INSERT INTO `sequelizemeta` VALUES ('20221116180100-users.js');
INSERT INTO `sequelizemeta` VALUES ('20221212110720-taxes.js');
INSERT INTO `sequelizemeta` VALUES ('20221212143531-payment_methods.js');
INSERT INTO `sequelizemeta` VALUES ('20221216090805-sliders.js');
INSERT INTO `sequelizemeta` VALUES ('20221216092243-languages.js');
INSERT INTO `sequelizemeta` VALUES ('20221216104006-product-categories.js');
INSERT INTO `sequelizemeta` VALUES ('20221219091401-customers.js');
INSERT INTO `sequelizemeta` VALUES ('20221219092357-fingerprints.js');
INSERT INTO `sequelizemeta` VALUES ('20221219093128-products.js');
INSERT INTO `sequelizemeta` VALUES ('20221219101607-shopping-cart.js');
INSERT INTO `sequelizemeta` VALUES ('20221219102730-cart-details.js');
INSERT INTO `sequelizemeta` VALUES ('20221219104728-contacts.js');
INSERT INTO `sequelizemeta` VALUES ('20221219105400-locales.js');
INSERT INTO `sequelizemeta` VALUES ('20221219110605-sales.js');
INSERT INTO `sequelizemeta` VALUES ('20221219113038-sale-details.js');
INSERT INTO `sequelizemeta` VALUES ('20221219115025-sale-errors.js');
INSERT INTO `sequelizemeta` VALUES ('20221219120801-refunds.js');
INSERT INTO `sequelizemeta` VALUES ('20221219124242-refund-details.js');
INSERT INTO `sequelizemeta` VALUES ('20221219125852-businesses.js');
INSERT INTO `sequelizemeta` VALUES ('20230109103300-faqs.js');
INSERT INTO `sequelizemeta` VALUES ('20230112162631-emails.js');

-- ----------------------------
-- Table structure for shopping_carts
-- ----------------------------
DROP TABLE IF EXISTS `shopping_carts`;
CREATE TABLE `shopping_carts`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `customersId` int NULL DEFAULT NULL,
  `fingerprintsId` int NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `customersId`(`customersId`) USING BTREE,
  INDEX `fingerprintsId`(`fingerprintsId`) USING BTREE,
  CONSTRAINT `shopping_carts_ibfk_1` FOREIGN KEY (`customersId`) REFERENCES `customers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `shopping_carts_ibfk_2` FOREIGN KEY (`fingerprintsId`) REFERENCES `fingerprints` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of shopping_carts
-- ----------------------------

-- ----------------------------
-- Table structure for sliders
-- ----------------------------
DROP TABLE IF EXISTS `sliders`;
CREATE TABLE `sliders`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `visible` tinyint(1) NOT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sliders
-- ----------------------------

-- ----------------------------
-- Table structure for source_images
-- ----------------------------
DROP TABLE IF EXISTS `source_images`;
CREATE TABLE `source_images`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `entity` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `entityKey` int NOT NULL,
  `languageAlias` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `filename` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `mimeType` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `sizeBytes` int NOT NULL,
  `widthPx` int NOT NULL,
  `heightPx` int NOT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of source_images
-- ----------------------------

-- ----------------------------
-- Table structure for taxes
-- ----------------------------
DROP TABLE IF EXISTS `taxes`;
CREATE TABLE `taxes`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` int NOT NULL,
  `valid` tinyint(1) NOT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of taxes
-- ----------------------------

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `deletedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `email`(`email`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'Ramon', 'dissenyramon@gmail.com', '$2a$12$gvvZDJIay3820FUq.xVAvug5C.cVr84bGBs/MigxTQrZWj//DmYSO', '2023-01-30 12:35:22', '2023-01-30 12:35:22', NULL);
INSERT INTO `users` VALUES (2, 'wtrwert', 'sdfgsdfg@qwerq.com', '$2a$12$qj4IkRQ.GPsZrMsYGzhCnO.WzyIm6LRfEBG3ui9Hdacb3xbkk2f/i', '2023-01-30 14:30:12', '2023-01-30 14:30:12', NULL);

SET FOREIGN_KEY_CHECKS = 1;
