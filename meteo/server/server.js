require("dotenv").config()

// Import Modules
const express = require('express')
const path = require('path')
const app = express()

// Config Port
const PORT = process.env.PORT_SERVER

// Config files Static
app.use("/assets", express.static(path.join(__dirname, "public")));

// Config body-parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Config Route
app.use('/api/today', require('./routers/today.router'))
app.use('/api/fivedays', require('./routers/fivedays.router'))

// Config Listen
app.listen(PORT, () => {
  console.log(`Server run on port http://localhost:${PORT}`)
})