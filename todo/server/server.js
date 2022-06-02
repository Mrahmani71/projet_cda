// import modules
import express from "express"
import dotenv from "dotenv"

// Import Routers
import todosRouter from "./routers/todos.router.js"
import actorsRouter from "./routers/actors.router.js"

const app = express()

// Config dotenv
dotenv.config()

// config port
const PORT = process.env.PORT

// Config JSON with urlencoded
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/actors', actorsRouter)
// app.use('/api/messages', )
app.use('/api/todos', todosRouter)

app.listen(PORT, () => {
  console.log(`App work on link http://localhost:${PORT}`)
})
