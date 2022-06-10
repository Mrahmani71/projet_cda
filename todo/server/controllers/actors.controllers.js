import bcryptjs from "bcryptjs"
import asyncHandler from "express-async-handler"
import generateToken from "../helpers/generateToken.js"
import { createActor, getActor } from "../models/requêtes/actors.model.js"
import { ValidateEmail } from "../helpers/regex.js"
import Actors from "../models/objects/Actors.model.js"
import AppError from "../helpers/appError.js"


// @desc   Get user
// @route  GET /api/actors/me
// @access private
export const getActorController = asyncHandler(async (req, res) => {
  const { id } = req.user[0]

  const data = await Actors.getActor('id', id)
  return res.status(200).json(data)
})

// @desc   Get all Actors
// @route  GET /api/actors/all
// @access private
export const getAllActorController = asyncHandler(async (req, res) => {
  const {role} = req.user[0]
  if (role === 0) {
    throw new AppError("You're not admin", 403)
  }
  const data = await Actors.getAllActors()
  return res.status(200).json(data)
})

// @desc   Login Actor
// @route  POST /api/actors/login
// @access public
export const loginActorController = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body

  if (ValidateEmail.test(email) !== true) {
    throw new AppError('Email is not valide', 400)
  }

  // Check if email or password existe in req.body
  if (!email, !password) {
    throw new AppError('email or password are not existe', 404)
  }

  // requte SQL For check email in db
  const user = await Actors.getActor("email", email)

  // Check email
  if (!user) {
    throw new AppError('user was not existe', 404)
  }

  // Check Password
  if (!(await bcryptjs.compare(password, user.password))) {
    throw new AppError('password is not correct', 400)
  }

  // finish
  if (user && (await bcryptjs.compare(password, user.password))) {
    res.status(200).json({
      id: user.id,
      email: user.email,
      token: generateToken(user.id),
      role: user.role
    })
  } else {
    throw new AppError('Invalid Error', 400)
  }
})

// @desc   Create Actor
// @route  POST /api/actors/
// @access public
export const createActorController = asyncHandler(async (req, res) => {
  const { email, password, confirmPassword } = req.body

  // Check Email
  if (ValidateEmail.test(email) !== true) {
    throw new Error('Email is not valide.', 400)
  }

  // Check if email or password or confirm password existe in req.body
  if (!email, !password, !confirmPassword) {
    throw new AppError('Email, Password or Confirm Password not existe',404)
  }

  // Check if password or confirm password are match
  if (!password === confirmPassword) {
    throw new AppError("Password and confirm password don't match",400)
  }

  // Check user existe in db
  const user = await Actors.getActor("email", email)

  // hash Password
  const salt = await bcryptjs.genSalt(10)
  const hashpass = await bcryptjs.hash(password, salt)

  // requete SQL for create a user
  await Actors.createActor(email, hashpass)
  const newUser = await Actors.getActor("email", email)
  if (newUser) {
    res.status(200).json({
      id: newUser.id,
      email: newUser.email,
      token: generateToken(newUser.id),
      role : newUser.role
    })
  } else {
    throw new AppError('Invalid Error',400)
  }
})

// @desc   Edit Actor
// @route  PUT /api/actors/:id
// @access private
export const editActorController = asyncHandler(async (req, res) => {
  console.log(req.user);
  // const data = await getAllTodos()
  // return res.status(200).json(data)
})

// @desc   delete Actor
// @route  Delete /api/actors/:id
// @access private
export const deleteActorController = asyncHandler(async (req, res) => {
  const data = await getAllTodos()
  return res.status(200).json(data)
})
