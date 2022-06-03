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
) ENGINE = InnoDB AUTO_INCREMENT = 12 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

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
  `membre_id` int DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 10 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

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
    8,
    NULL,
    '123456',
    NULL,
    '$2a$10$WgkzjpW.pGU/Jh/4sn8gBeVJUetuuUpO3E3ndzN5ho780mVWu3THS',
    '2022-06-02 13:35:03',
    NULL
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
    10,
    NULL,
    'm@m.com',
    NULL,
    '$2a$10$CmVqereN6cOfFDz.kXec.uMzm9biJuXG18YhPmjY/EczNBh50u55y',
    '2022-06-03 14:09:26',
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
    11,
    NULL,
    'jean@jean.jean',
    NULL,
    '$2a$10$oth74o/wPs4YOxF25NSh.enyU2U5oA0t/ykj2Ding1wWuAryQnU1e',
    '2022-06-03 16:05:29',
    0
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: messages
# ------------------------------------------------------------


# ------------------------------------------------------------
# DATA DUMP FOR TABLE: todos
# ------------------------------------------------------------

INSERT INTO
  `todos` (`id`, `title`, `description`, `membre_id`, `date`)
VALUES
  (4, 'edit 1', 'edit 1', 8, '2022-06-02 15:16:47');
INSERT INTO
  `todos` (`id`, `title`, `description`, `membre_id`, `date`)
VALUES
  (
    6,
    'todo 2',
    'desc todo 2',
    10,
    '2022-06-03 15:55:19'
  );
INSERT INTO
  `todos` (`id`, `title`, `description`, `membre_id`, `date`)
VALUES
  (
    7,
    'todo 1',
    'desc todo 1',
    10,
    '2022-06-03 15:57:59'
  );
INSERT INTO
  `todos` (`id`, `title`, `description`, `membre_id`, `date`)
VALUES
  (
    8,
    'todo 3',
    'desc todo 3',
    10,
    '2022-06-03 16:24:34'
  );
INSERT INTO
  `todos` (`id`, `title`, `description`, `membre_id`, `date`)
VALUES
  (
    9,
    'todo 9974454',
    'desc todo 9974454',
    10,
    '2022-06-03 16:25:01'
  );

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
