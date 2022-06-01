import {getAllTodos} from "../models/requêtes/todos.model.js"

// @desc   Get user
// @route  GET /api/actors/:id
// @access private
export const getActor = async (req, res) => {
  const data = await getAllTodos()
  return res.status(200).json(data)
}

// @desc   Get all Actors
// @route  GET /api/actors/
// @access private
export const getAllActor = async (req, res) => {
  const data = await getAllTodos()
  return res.status(200).json(data)
}

// @desc   Create Actor
// @route  POST /api/actors/
// @access public
export const createActor = async (req, res) => {
  const data = await getAllTodos()
  return res.status(200).json(data)
}

// @desc   Edit Actor
// @route  PUT /api/actors/:id
// @access private
export const repondActor = async (req, res) => {
  const data = await getAllTodos()
  return res.status(200).json(data)
}

// @desc   delete Actor
// @route  Delete /api/actors/:id
// @access private
export const deleteTodo = async (req, res) => {
  const data = await getAllTodos()
  return res.status(200).json(data)
}
