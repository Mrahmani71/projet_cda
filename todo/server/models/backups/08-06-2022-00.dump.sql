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
) ENGINE = InnoDB AUTO_INCREMENT = 15 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

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
) ENGINE = InnoDB AUTO_INCREMENT = 41 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

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
  (4, 'edit 1', 'edit 1', 12, 1, '2022-06-02 15:16:47');
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
    6,
    'todo 2',
    'desc todo 2',
    12,
    1,
    '2022-06-03 15:55:19'
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
    7,
    'todo 1',
    'desc todo 1',
    12,
    1,
    '2022-06-03 15:57:59'
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
    8,
    'todo 3',
    'desc todo 3',
    12,
    1,
    '2022-06-03 16:24:34'
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
    9,
    'todo 9974454',
    'desc todo 9974454',
    12,
    1,
    '2022-06-03 16:25:01'
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
  (10, 'nakad', 'test', 12, 1, '2022-06-07 14:00:10');
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
  (11, 'hello', '', 12, 1, '2022-06-07 14:00:45');
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
    12,
    'axel',
    'this is a axel',
    12,
    1,
    '2022-06-07 14:04:00'
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
  (13, 'mamad', 'is old', 12, 1, '2022-06-07 14:08:13');
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
    14,
    'todo 9974454',
    'desc todo 9974454',
    12,
    1,
    '2022-06-07 14:08:53'
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
    15,
    'todo 111',
    'desc todo 9974454',
    12,
    1,
    '2022-06-07 14:09:24'
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
  (16, '1416', '987987', 12, 1, '2022-06-07 14:10:05');
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
    17,
    'dan',
    'das is a dev',
    12,
    1,
    '2022-06-07 14:11:31'
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
    18,
    'morgan',
    'moragan XXX\n',
    12,
    1,
    '2022-06-07 14:16:27'
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
  (19, '321132', '321132', 12, 0, '2022-06-07 15:22:07');
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
  (23, 'e\"', '', 12, 0, '2022-06-07 16:25:15');
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
  (24, 'e\"', '', 12, 0, '2022-06-07 16:34:15');
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
  (25, 'e\'', '', 12, 0, '2022-06-07 16:34:23');
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
  (26, '1', '', 12, 0, '2022-06-07 16:45:18');
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
  (27, 'chlo', '', 12, 0, '2022-06-07 16:45:36');
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
  (28, 'chloe', '', 12, 0, '2022-06-07 16:50:15');
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
  (29, 'chloéé', '', 12, 0, '2022-06-07 16:50:21');
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
    30,
    'this is a test',
    'my test',
    12,
    0,
    '2022-06-07 23:33:29'
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
  (31, '[he\"]', '111', 12, 0, '2022-06-07 23:40:19');
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
  (32, '1234', '1', 12, 0, '2022-06-07 23:48:56');
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
  (33, '1234', '1234', 12, 0, '2022-06-07 23:50:03');
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
  (34, '1234', '1234', 12, 0, '2022-06-07 23:51:48');
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
  (35, '1123', '46546', 12, 0, '2022-06-08 00:07:24');
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
  (36, '111', '111', 12, 0, '2022-06-08 00:07:28');
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
  (37, '1234', '1234', 12, 0, '2022-06-08 00:11:55');
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
  (38, '1\"', '1', 12, 0, '2022-06-08 00:16:27');
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
  (39, '1\"', '1', 12, 0, '2022-06-08 00:18:12');
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
    40,
    'i\'am mohammad',
    'i\'am mohammad',
    12,
    0,
    '2022-06-08 00:19:43'
  );

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
