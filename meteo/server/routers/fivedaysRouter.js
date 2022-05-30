import express from 'express'
const fiveDaysRouter = express.Router()

// Middleware
import testMiddleware from '../middlewares/test.js'

// // Controllers
import getFiveWeather from "../controllers/fivedays.controller.js"

// Config Router API
fiveDaysRouter.route("/:ville").get(testMiddleware, getFiveWeather)

export default fiveDaysRouter