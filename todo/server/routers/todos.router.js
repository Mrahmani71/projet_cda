import express from "express";
import { 
  createTodoController, 
  deleteAllTodosController, 
  deleteTodoController, 
  doTodoController, 
  getTodosController, 
  updateTodoController } from "../controllers/todos.controller.js";
  
import isLogged from "../middlewares/auth.js";
const todosRouter = express.Router()


// import controllers
todosRouter.route('/').get(isLogged, getTodosController)

// Create a todo
todosRouter.route('/').post(isLogged, createTodoController)

// Do Todo
todosRouter.route('/do/:id').post(isLogged, doTodoController)

// Edit Todo
todosRouter.route('/:id').put(isLogged, updateTodoController)


// Delete a todo a user
todosRouter.route('/:id').delete(isLogged, deleteTodoController)

// Delete All todos a user
todosRouter.route('/all').delete(isLogged, deleteAllTodosController)

export default todosRouter