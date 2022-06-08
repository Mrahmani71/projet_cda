import { checkChar } from "../helpers/regex.js"
import { createTodo, deleteAllTodos, deleteTodo, doTodo, editTodo, getLastTodo, getTodo, getTodos } from "../models/requêtes/todos.model.js"

// @desc   Get todos
// @route  GET /api/todos/
// @access private
export const getTodosController = async (req, res) => {
  const { id } = req.user[0]

  const data = await getTodos(id)
  try {
    if (data.length > 0) {
      return res.status(200).json(data)
    }
    if (data.length === 0) {
      return res.status(200).json({ message: "nothing" })
    }
  } catch (error) {
    console.log(error);
  }
}

// @desc   Create todo
// @route  POST /api/todos/
// @access private
export const createTodoController = async (req, res) => {
  const { title, description } = req.body
  if (!title) {
    res.status(404)
    throw new Error('Title is required')
  }
  const { id } = req.user[0];
  const Title = await checkChar(title)
  const Description = await checkChar(description)
  await createTodo(Title, Description, id)
  const data = await getLastTodo()
  return res.status(200).json(data[0])
}

// @desc   do a todo
// @route  POST /api/todos/do/:id
// @access private
export const doTodoController = async (req, res) => {
  const getDo = req.body
  // Check is true or false
  if(!getDo || !getDo.do === 0 ||!getDo.do === 1) {
    res.status(400)
    throw new Error('request is not valide')
  }
  const {id} = req.params
  const id_user = req.user[0].id

  const todo = await getTodo(id)

  if(todo[0].membre_id === id_user) {
    await doTodo(getDo.do, id)
    const todo = await getTodo(id)
    res.status(200).json(todo)
  } else {
    res.status(400)
    throw new Error('You have not droit')
  }
}

// @desc   Edit a todo
// @route  PUT /api/todos/:id
// @access private
export const updateTodoController = async (req, res) => {
  const { title, description } = req.body
  const { id } = req.params
  const id_user = req.user[0].id

  const todo = await getTodo(id)

  if (todo[0].membre_id === id_user) {
    const Title = await checkChar(title)
    const Description = await checkChar(description)
    await editTodo(Title, Description, id)
    const edited = await getTodo(id)
    res.status(200).json(edited)
  } else {
    res.status(400)
    throw new Error('You have not droit')
  }
}

// @desc   Delete a todo
// @route  Delete /api/todos/:id
// @access private
export const deleteTodoController = async (req, res) => {
  const { id } = req.params

  const todo = await getTodo(id)
  const id_user = req.user[0].id

  if (todo[0].membre_id === id_user) {
    const data = await deleteTodo(id)

    if (data.affectedRows > 0) {
      return res.status(200).json({ id : id })
    } else {
      return res.status(400).json({ message: "todo not exist" })
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
  const { user_id } = req.user

  const data = await deleteAllTodos(user_id)

  if (data.affectedRows > 0) {
    return res.status(200).json({ message: "All todos was deleted" })
  } else {
    return res.status(400).json({ message: "any todo not exist" })
  }
}
