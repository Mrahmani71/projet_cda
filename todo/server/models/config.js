import mysql from "mysql"
import {promisify} from "util"
import dotenv from "dotenv"
dotenv.config()
const config = {
  connectionLimit : 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
}


const pool = mysql.createPool(config)

pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log("db connected");
});

const query = promisify(pool.query).bind(pool)

export default query
