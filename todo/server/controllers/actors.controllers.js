import bcryptjs from "bcryptjs"
import asyncHandler from "express-async-handler"
import generateToken from "../helpers/generateToken.js"
import { createActor, getActor } from "../models/requêtes/actors.model.js"
import { ValidateEmail } from "../helpers/regex.js"
import AppError from "../helpers/appError.js"


// @desc   Get user
// @route  GET /api/actors/me
// @access private
export const getActorController = asyncHandler(async (req, res) => {
  const { id } = req.user[0]
  console.log(req.user);
  const data = await getActor("id",id)
  return res.status(200).json(data)
})

// @desc   Get all Actors
// @route  GET /api/actors/
// @access private
export const getAllActorController = asyncHandler(async (req, res) => {
  const data = await getAllTodos()
  return res.status(200).json(data)
})

// @desc   Login Actor
// @route  POST /api/actors/login
// @access public
export const loginActorController = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body

  if (ValidateEmail.test(email) != true) {
    res.status(400)
    throw new Error('Email is not valide.')
  }

  // Check if email or password existe in req.body
  if (!email, !password) {
    res.status(404)
    throw new Error('Email or Password not existe')
  }

  // requte SQL For check email in db
  const user = await getActor("email", email)

  // Check email
  if (!user[0]) {
    res.status(400)
    throw new Error('User not existe')
  }

  // Check Password
  if (!(await bcryptjs.compare(password, user[0].password))) {
    res.status(400)
    throw new Error('password is not not correct')
  }

  // finish
  if (user && (await bcryptjs.compare(password, user[0].password))) {
    res.status(200).json({
      id: user[0].id,
      email: user[0].email,
      token: generateToken(user[0].id),
      role: user[0].role
    })
  } else {
    res.status(400)
    throw new Error('Invalid Error')
  }
})

// @desc   Create Actor
// @route  POST /api/actors/
// @access public
export const createActorController = asyncHandler(async (req, res) => {
  const { email, password, confirmPassword } = req.body
  

  if (ValidateEmail.test(email) != true) {
    res.status(400)
    throw new Error('Email is not valide.')
  }

  // Check if email or password or confirm password existe in req.body
  if (!email, !password, !confirmPassword) {
    res.status(404)
    throw new Error('Email, Password or Confirm Password not existe')
  }

  // Check if password or confirm password are match
  if (!password === confirmPassword) {
    res.status(400)
    throw new Error("Password and confirm password don't match")
  }

  // Check user existe in db
  const user = await getActor("email", email)

  if (user.length > 0) {
    res.status(400)
    throw new Error("This email already exists")
  }

  // hash Password
  const salt = await bcryptjs.genSalt(10)
  const hashpass = await bcryptjs.hash(password, salt)

  // requete SQL for create a user
  await createActor(email, hashpass)
  const newUser = await getActor("email", email)
  if (newUser) {
    res.status(200).json({
      id: newUser[0].id,
      email: newUser[0].email,
      token: generateToken(newUser[0].id),
      role : newUser[0].role
    })
  } else {
    res.status(400)
    throw new Error('Invalid Error')
  }
})

// @desc   Edit Actor
// @route  PUT /api/actors/:id
// @access private
export const repondActorController = asyncHandler(async (req, res) => {
  const data = await getAllTodos()
  return res.status(200).json(data)
})

// @desc   delete Actor
// @route  Delete /api/actors/:id
// @access private
export const deleteTodoController = asyncHandler(async (req, res) => {
  const data = await getAllTodos()
  return res.status(200).json(data)
})
