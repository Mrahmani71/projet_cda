import express from "express";
import { deleteTodoController, getTodosController } from "../controllers/todos.controller.js";
const todosRouter = express.Router()


// import controllers
todosRouter.route('/').get(getTodosController)
todosRouter.route('/:id').delete(deleteTodoController)

export default todosRouter