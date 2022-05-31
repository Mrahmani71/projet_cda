import {deleteAllTodos, deleteTodo, getTodos} from "../models/requêtes/todos.model.js"

// @desc   Get todos
// @route  GET /api/todos/
// @access private
export const getTodosController = async (req, res) => {
  const {user_id} = res.locals.user

  const data = await getTodos(user_id)
  return res.status(200).json(data)
}

// @desc   Create todo
// @route  POST /api/todos/
// @access private
export const createTodoController = async (req, res) => {
  const {title, description} = req.body

  const data = await getTodos()
  return res.status(200).json(data)
}

// @desc   Edit a todo
// @route  PUT /api/todos/:id
// @access private
export const updateTodoController = async (req, res) => {
  const {id} = req.params

  const data = await getTodos()
  return res.status(200).json(data)
}

// @desc   Delete a todo
// @route  Delete /api/todos/:id
// @access private
export const deleteTodoController = async (req, res) => {
  const {id} = req.params

  const data = await deleteTodo(id)

  if (data.affectedRows > 0) {
    return res.status(200).json({message : "todo was deleted"})
  } else {
    return res.status(400).json({message: "todo not exist"})
  }
}


// @desc   Delete all todo
// @route  Delete /api/todos/all
// @access private
export const deleteAllTodoController = async (req, res) => {
  const {user_id} = res.locals.user

  const data = await deleteAllTodos(user_id)

  if (data.affectedRows > 0) {
    return res.status(200).json({message : "All todos was deleted"})
  } else {
    return res.status(400).json({message: "any todo not exist"})
  }
}
