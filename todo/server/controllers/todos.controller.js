import {createTodo, deleteAllTodos, deleteTodo, editTodo, getTodo, getTodos} from "../models/requêtes/todos.model.js"

// @desc   Get todos
// @route  GET /api/todos/
// @access private
export const getTodosController = async (req, res) => {
  const {id} = req.user[0]

  const data = await getTodos(id)
  try {
    if (data.length > 0) {
      return res.status(200).json(data)
    } 
    if (data.length === 0) {
      return res.status(200).json({message: "nothing"})
    }
  } catch (error) {
    console.log(error);
  }
}

// @desc   Create todo
// @route  POST /api/todos/
// @access private
export const createTodoController = async (req, res) => {
  const {title, description} = req.body
  const {id} = req.user[0];

  const data = await createTodo(title, description, id)
  return res.status(200).json(data)
}

// @desc   Edit a todo
// @route  PUT /api/todos/:id
// @access private
export const updateTodoController = async (req, res) => {
  const {title, description} = req.body
  const {id} = req.params
  const id_user = req.user[0].id

  const todo = await getTodo(id)

  if(todo[0].membre_id === id_user) {
    const edit = await editTodo(title, description, id)
    res.status(200).json(edit)
  } else {
    res.status(400)
    throw new Error('You have not droit')
  }

}

// @desc   Delete a todo
// @route  Delete /api/todos/:id
// @access private
export const deleteTodoController = async (req, res) => {
  const {id} = req.params

  const todo = await getTodo(id)
  const id_user = req.user[0].id

  if(todo[0].membre_id === id_user) {
    const data = await deleteTodo(id)

    if (data.affectedRows > 0) {
      return res.status(200).json({message : "todo was deleted"})
    } else {
      return res.status(400).json({message: "todo not exist"})
    }
  } else {
    res.status(400)
    throw new Error('You have not droit')
  }
}


// @desc   Delete all todo
// @route  Delete /api/todos/all
// @access private
export const deleteAllTodosController = async (req, res) => {
  const {user_id} = req.user

  const data = await deleteAllTodos(user_id)

  if (data.affectedRows > 0) {
    return res.status(200).json({message : "All todos was deleted"})
  } else {
    return res.status(400).json({message: "any todo not exist"})
  }
}
