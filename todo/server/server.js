// import modules
import express from "express"
import dotenv from "dotenv"

// Import Routers
import todosRouter from "./routers/todos.router.js"
import actorsRouter from "./routers/actors.router.js"
import {errorHandler} from "./middlewares/errorHandler.js"
import AppError from "./helpers/appError.js"

const app = express()

// Config dotenv
dotenv.config()

// // config port
const PORT = process.env.PORT

// Config JSON with urlencoded
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/actors', actorsRouter)
// // app.use('/api/messages', )
app.use('/api/todos', todosRouter)


app.all("*", (req, res) => {
  res.status(404)
  throw new Error(`Requested URL ${req.path} not found!`)
})

app.use(errorHandler)


app.listen(PORT, () => {
  console.log(`App work on link http://localhost:${PORT}`)
})
