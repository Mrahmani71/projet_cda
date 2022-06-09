import mysql from "mysql"
import {promisify} from "util"
import dotenv from "dotenv"

console.log("db");
dotenv.config()
const config = {
  connectionLimit : 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
}
const pool = mysql.createConnection(config)

const query = promisify(pool.query).bind(pool)

export default query
