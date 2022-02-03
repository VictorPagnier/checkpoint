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

INSERT INTO games
(name, description, genre, image, year, screenshots, id_categorie)
VALUES
('The Witcher 3: Wild Hunt', 'The Witcher: Wild Hunt is a story-driven open world RPG set in a visually stunning fantasy universe full of meaningful choices and impactful consequences.', 'Action', 'https://www.demotivateur.fr/images-buzz/cover/64433337261c0b814ae655_734225-the-witcher-une-saison-3-et-un-troisie-opengraph-1200-1.png', '2015', 'https://cdn.akamai.steamstatic.com/steam/apps/292030/extras/W3_1.gif?t=1621939214', 1);
('Counter Strike Global Offensive', 'Counter Strike Global Offensive alias CS:GO is an action game with 10 players at total.', 'Shooter', 'https://img3.goodfon.com/wallpaper/nbig/2/e0/valve-global-offensive-global-offensive-counter-strike-cs-go.jpg', '2012', '', 5);

INSERT INTO reviews
(name, description, note, id_jeu)
VALUES
('Awesome', 'Oh man... What to say... This game was an absolute pleasure to play', 5, 1);
('Pretty good', 'It is a very nice game with a lot of strategy', '4.6', 2);

INSERT INTO categories
(name, description, image)
VALUES
('Action', 'Game with action', 'https://imgr.cineserie.com/2021/09/braqueurs.jpeg?imgeng=/f_jpg/cmpr_0/w_660/h_370/m_cropbox&ver=1');

INSERT INTO categories
(name, description, image)
VALUES
('Aventure', 'Game with aventure', 'https://jolstatic.fr/www/captures/3840/4/139594.jpg');

INSERT INTO categories
(name, description, image)
VALUES
('Stategy', 'Game with strategy', 'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3RyYXRlZ3l8ZW58MHx8MHx8&w=1000&q=80');

INSERT INTO categories
(name, description, image)
VALUES
('MMO', 'Game with MMO', 'https://sm.ign.com/t/ign_fr/news/n/new-world-/new-world-amazons-upcoming-mmo-delayed-to-august_bcn1.1200.jpg');

INSERT INTO categories
(name, description, image)
VALUES
('Shooter', 'Game with guns', 'https://www.pcgamesn.com/wp-content/uploads/2020/01/best-fps-games-escape-from-tarkov-900x506.jpg')