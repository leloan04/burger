CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE `burgers` (
  `id` INT AUTO_INCREMENT NOT NULL,
  `burger_name` VARCHAR(255) NOT NULL,
  `devoured` TINYINT(1) NULL,
  PRIMARY KEY (`id`) 
);