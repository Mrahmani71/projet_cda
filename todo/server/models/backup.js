import mysqldump from "mysqldump"
import dotenv from "dotenv"
dotenv.config()
var d = new Date();
const fulldate = `${Number(d.getFullYear())}-${Number(d.getUTCMonth()) + 1}-${Number(d.getUTCDate())}-${Number(d.getHours())}`

mysqldump({
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
  },
  dumpToFile: `./server/models/backups/${fulldate}.dump.sql`,
});

// module.exports = mysqldump;
