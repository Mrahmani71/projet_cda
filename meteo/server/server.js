// Import Modules
import dotenv from "dotenv"
import express from "express";
import path from 'path';
const __dirname = path.resolve();
import cors from 'cors';
import todayRouter from './routers/todayRouter.js'
import fiveDaysRouter from "./routers/fivedaysRouter.js"

const app = express()
dotenv.config()
// Config Port
const PORT = process.env.PORT_SERVER

// Config files Static
app.use("/assets", express.static(path.join(__dirname, "public")));

// Config body-parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.header('origin'))
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})
// Cors
app.use(cors({
  origin: ['http://localhost:5000', 'http://192.168.1.54:5000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}))
// Config Route
app.use('/api/today', todayRouter)
app.use('/api/fivedays', fiveDaysRouter)

// Config Listen
app.listen(PORT, () => {
  console.log(`Server run on port http://localhost:${PORT}`)
})