/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: actors
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `actors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) CHARACTER SET ucs2 COLLATE ucs2_general_ci DEFAULT NULL,
  `token` varchar(25) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `Timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `role` tinyint DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 16 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: messages
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `messages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sujet` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `message` varchar(255) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: todos
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `todos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `membre_id` int NOT NULL,
  `do` tinyint DEFAULT '0',
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 65 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: actors
# ------------------------------------------------------------

INSERT INTO
  `actors` (
    `id`,
    `name`,
    `email`,
    `token`,
    `password`,
    `Timestamp`,
    `role`
  )
VALUES
  (
    12,
    NULL,
    'm@m.com',
    NULL,
    '$2a$10$F05j5Z/CdfPi1lv2tFack.vZDUSXZ2mc2SzsU5KhhjGYGODupOMFe',
    '2022-06-07 09:33:33',
    0
  );
INSERT INTO
  `actors` (
    `id`,
    `name`,
    `email`,
    `token`,
    `password`,
    `Timestamp`,
    `role`
  )
VALUES
  (
    13,
    NULL,
    'dversabeau@hotmail.fr',
    NULL,
    '$2a$10$bU2cvKeg0L950miyhNHBc.mkrp5oXmwXlz.LO.jN2JcnxVlE0fgXm',
    '2022-06-07 15:23:05',
    0
  );
INSERT INTO
  `actors` (
    `id`,
    `name`,
    `email`,
    `token`,
    `password`,
    `Timestamp`,
    `role`
  )
VALUES
  (
    14,
    NULL,
    'bruno@mail',
    NULL,
    '$2a$10$fwjzJ1.8pLRGrwf3mhgklejTkUQ0ssuIUZgXKuVN2vK2mlY1bHz..',
    '2022-06-07 15:28:18',
    0
  );
INSERT INTO
  `actors` (
    `id`,
    `name`,
    `email`,
    `token`,
    `password`,
    `Timestamp`,
    `role`
  )
VALUES
  (
    15,
    NULL,
    'm@mm.com',
    NULL,
    '$2a$10$u7o7145SSyNI7oNVP63DkezaIjzSraAy0n6gMaM8rpK0EoIJhKmG2',
    '2022-06-08 14:57:50',
    0
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: messages
# ------------------------------------------------------------


# ------------------------------------------------------------
# DATA DUMP FOR TABLE: todos
# ------------------------------------------------------------

INSERT INTO
  `todos` (
    `id`,
    `title`,
    `description`,
    `membre_id`,
    `do`,
    `date`
  )
VALUES
  (
    20,
    'Buter Joris',
    'Le tuer à la salle\nen fesant croire un accisdent\n',
    13,
    0,
    '2022-06-07 15:23:48'
  );
INSERT INTO
  `todos` (
    `id`,
    `title`,
    `description`,
    `membre_id`,
    `do`,
    `date`
  )
VALUES
  (21, 'toto', 'qs', 14, 0, '2022-06-07 15:28:24');
INSERT INTO
  `todos` (
    `id`,
    `title`,
    `description`,
    `membre_id`,
    `do`,
    `date`
  )
VALUES
  (22, 'todos', 'q', 14, 0, '2022-06-07 15:57:08');
INSERT INTO
  `todos` (
    `id`,
    `title`,
    `description`,
    `membre_id`,
    `do`,
    `date`
  )
VALUES
  (
    50,
    'hello5666',
    'mohammad',
    12,
    0,
    '2022-06-08 12:23:10'
  );
INSERT INTO
  `todos` (
    `id`,
    `title`,
    `description`,
    `membre_id`,
    `do`,
    `date`
  )
VALUES
  (62, '\"-\'*/s', '', 12, 0, '2022-06-08 14:51:02');
INSERT INTO
  `todos` (
    `id`,
    `title`,
    `description`,
    `membre_id`,
    `do`,
    `date`
  )
VALUES
  (
    63,
    '\'\'-\"**\'*\'+\"z\'-\'--\'',
    '',
    12,
    0,
    '2022-06-08 14:51:14'
  );
INSERT INTO
  `todos` (
    `id`,
    `title`,
    `description`,
    `membre_id`,
    `do`,
    `date`
  )
VALUES
  (
    64,
    '-- INSERT INTO todos SET title=sdfgsdf --',
    '',
    12,
    0,
    '2022-06-08 14:53:36'
  );

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
