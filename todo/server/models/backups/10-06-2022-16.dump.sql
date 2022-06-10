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
  `create_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `role` tinyint DEFAULT '0',
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 32 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

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
  `doit` tinyint DEFAULT '0',
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 78 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

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
    `create_date`,
    `role`,
    `updated`
  )
VALUES
  (
    12,
    'test',
    'm@m.com',
    NULL,
    '$2a$10$F05j5Z/CdfPi1lv2tFack.vZDUSXZ2mc2SzsU5KhhjGYGODupOMFe',
    '2022-06-07 09:33:33',
    0,
    '2022-06-10 16:30:02'
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
    `doit`,
    `date`,
    `updated`
  )
VALUES
  (
    50,
    '2',
    '2',
    12,
    1,
    '2022-06-08 12:23:10',
    '2022-06-10 13:58:26'
  );
INSERT INTO
  `todos` (
    `id`,
    `title`,
    `description`,
    `membre_id`,
    `doit`,
    `date`,
    `updated`
  )
VALUES
  (
    62,
    '\"-\'*/s',
    '',
    12,
    1,
    '2022-06-08 14:51:02',
    '2022-06-09 16:28:08'
  );
INSERT INTO
  `todos` (
    `id`,
    `title`,
    `description`,
    `membre_id`,
    `doit`,
    `date`,
    `updated`
  )
VALUES
  (
    63,
    '\'\'-\"**\'*\'+\"z\'-\'--\'',
    '',
    12,
    1,
    '2022-06-08 14:51:14',
    '2022-06-09 16:28:08'
  );
INSERT INTO
  `todos` (
    `id`,
    `title`,
    `description`,
    `membre_id`,
    `doit`,
    `date`,
    `updated`
  )
VALUES
  (
    64,
    '-- INSERT INTO todos SET title=sdfgsdf --',
    '',
    12,
    1,
    '2022-06-08 14:53:36',
    '2022-06-09 16:28:08'
  );
INSERT INTO
  `todos` (
    `id`,
    `title`,
    `description`,
    `membre_id`,
    `doit`,
    `date`,
    `updated`
  )
VALUES
  (
    65,
    '111',
    '111',
    12,
    0,
    '2022-06-09 16:48:46',
    '2022-06-09 16:48:46'
  );
INSERT INTO
  `todos` (
    `id`,
    `title`,
    `description`,
    `membre_id`,
    `doit`,
    `date`,
    `updated`
  )
VALUES
  (
    66,
    '2',
    '2',
    12,
    0,
    '2022-06-10 09:13:12',
    '2022-06-10 11:06:38'
  );
INSERT INTO
  `todos` (
    `id`,
    `title`,
    `description`,
    `membre_id`,
    `doit`,
    `date`,
    `updated`
  )
VALUES
  (
    67,
    '1',
    '1',
    12,
    0,
    '2022-06-10 09:14:27',
    '2022-06-10 09:14:27'
  );
INSERT INTO
  `todos` (
    `id`,
    `title`,
    `description`,
    `membre_id`,
    `doit`,
    `date`,
    `updated`
  )
VALUES
  (
    68,
    '1',
    '1',
    12,
    0,
    '2022-06-10 09:18:48',
    '2022-06-10 09:18:48'
  );
INSERT INTO
  `todos` (
    `id`,
    `title`,
    `description`,
    `membre_id`,
    `doit`,
    `date`,
    `updated`
  )
VALUES
  (
    69,
    '1',
    '1',
    12,
    0,
    '2022-06-10 09:19:02',
    '2022-06-10 09:19:02'
  );
INSERT INTO
  `todos` (
    `id`,
    `title`,
    `description`,
    `membre_id`,
    `doit`,
    `date`,
    `updated`
  )
VALUES
  (
    70,
    '1',
    '1',
    12,
    0,
    '2022-06-10 09:19:16',
    '2022-06-10 09:19:16'
  );
INSERT INTO
  `todos` (
    `id`,
    `title`,
    `description`,
    `membre_id`,
    `doit`,
    `date`,
    `updated`
  )
VALUES
  (
    71,
    '1',
    '1',
    12,
    0,
    '2022-06-10 09:19:35',
    '2022-06-10 09:19:35'
  );
INSERT INTO
  `todos` (
    `id`,
    `title`,
    `description`,
    `membre_id`,
    `doit`,
    `date`,
    `updated`
  )
VALUES
  (
    72,
    '1',
    '1',
    12,
    0,
    '2022-06-10 09:39:07',
    '2022-06-10 09:39:07'
  );

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
