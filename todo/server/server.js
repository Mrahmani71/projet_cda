// import modules
import express from "express"
import dotenv from "dotenv"
import asyncHandler from "express-async-handler"
// Import Routers
import todosRouter from "./routers/todos.router.js"
import actorsRouter from "./routers/actors.router.js"
import errorHandler from "./middlewares/errorHandler.js"
import Todos from "./models/objects/Todos.model.js"
import AppError from "./helpers/appError.js"
import Actors from "./models/objects/Actors.model.js"

const app = express()

// Config dotenv
dotenv.config()

// // config port
const PORT = process.env.PORT

// Config JSON with urlencoded
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/actors', actorsRouter)
// // app.use('/api/messages', )
app.use('/api/todos', todosRouter)


app.get('/class', asyncHandler(async (req, res, next) => {

  // --------- Todos
  // const todo = await Todos.getTodos(27)
  // const todo = await Todos.createTodo('1','1', 28)
  // const todo = await Todos.editTodo("2","2",50, 12);
  // const todo = await Todos.deleteTodo(74, 27);
  // const todo = await Todos.deleteAllTodo(1);
  // return res.status(200).json(todo);

  // --------- Actors
  // const actors = await Actors.getAllActors()
  // const actors = await Actors.getActor("id", 13)
  const actors = await Actors.createActor("m@mm.com", "test")
  // const actors = await Actors.editActor(12,"test", "m@m.com")
  // const actors = await Actors.deleteActor(28)
  return res.status(actors.statusCode || 200).json(actors);
}
))

app.all("*", (req, res) => {
  throw new AppError(`Requested URL ${req.path} not found!`, 404)
})

app.use(errorHandler)


app.listen(PORT, () => {
  console.log(`App work on link http://localhost:${PORT}`)
})
