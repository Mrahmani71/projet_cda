import jwt from "jsonwebtoken"
import asynchandler from "express-async-handler"
import { getActor } from "../models/requêtes/actors.model.js"

const isLogged = async (req ,res , next) => {
  let token
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      req.user = await getActor("id",decoded.id)

      delete req.user[0]['password']
      delete req.user[0]['token']
      delete req.user[0]['Timestamp']

      next()
    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error("not authorized")
      
    }
  }

  if (!token) {
    res.status(401)
    throw new Error("not authorized && no token")
  }
}

export default isLogged