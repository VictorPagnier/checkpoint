CREATE DATABASE checkpointgame;

USE checkpointgame;

CREATE TABLE `games` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `description` VARCHAR(255) NULL,
  `genre` VARCHAR(255) NULL,
  `image` VARCHAR(255) NULL,
  `year` VARCHAR(255) NULL,
  `screenshots` VARCHAR(255) NULL,
  `id_categorie` INT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `reviews` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `description` VARCHAR(255) NULL,
  `note` TINYINT(1) NULL,
  `id_jeu` INT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `description` VARCHAR(255) NULL,
  `image` VARCHAR(255) NULL,
  PRIMARY KEY (`id`)
);
