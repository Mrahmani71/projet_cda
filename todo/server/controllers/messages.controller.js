import {getAllTodos} from "../models/requêtes/todos.model.js"

// @desc   Get message
// @route  GET /api/messages/:id
// @access private
export const getMessage = async (req, res) => {
  const data = await getAllTodos()
  return res.status(200).json(data)
}

// @desc   Get all messages
// @route  GET /api/messages/
// @access private
export const getAllMessage = async (req, res) => {
  const data = await getAllTodos()
  return res.status(200).json(data)
}

// @desc   Create Message
// @route  POST /api/messages/
// @access public
export const createMessage = async (req, res) => {
  const data = await getAllTodos()
  return res.status(200).json(data)
}

// @desc   Repond message
// @route  Post /api/messages/:id
// @access private
export const repondMessage = async (req, res) => {
  const data = await getAllTodos()
  return res.status(200).json(data)
}

// @desc   delete message
// @route  Delete /api/messages/:id
// @access private
export const deleteTodo = async (req, res) => {
  const data = await getAllTodos()
  return res.status(200).json(data)
}
