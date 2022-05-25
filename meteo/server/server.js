require("dotenv").config()

// Import Modules
const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')

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
app.use('/api/today', require('./routers/today.router'))
app.use('/api/fivedays', require('./routers/fivedays.router'))

// Config Listen
app.listen(PORT, () => {
  console.log(`Server run on port http://localhost:${PORT}`)
})