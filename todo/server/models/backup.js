import mysqldump from "mysqldump"
import dotenv from "dotenv"
dotenv.config()
var d = new Date().toLocaleString("fr-FR").slice(0, 14).replace(", ", "-").replaceAll("/", "-");

mysqldump({
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
  },
  dumpToFile: `./server/models/backups/${d}.dump.sql`,
});

export default mysqldump
