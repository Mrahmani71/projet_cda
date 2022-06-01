// import modules
import express from "express"
import dotenv from "dotenv"

// Import Routers
import todosRouter from "./routers/todos.router.js"

const app = express()

// Config dotenv
dotenv.config()

// config port
const PORT = process.env.PORT


// app.use('/api/actors', )
// app.use('/api/messages', )
app.use('/api/todos', todosRouter)

app.listen(PORT, () => {
  console.log(`App work on link http://localhost:${PORT}`)
})
