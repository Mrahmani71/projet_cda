import express from 'express'
const todayRouter = express.Router()

// Middleware
import testMiddleware from '../middlewares/test.js'

// Controllers
import getTodayWeather from "../controllers/today.controller.js"

// Config Router API
todayRouter.route("/:ville").get(testMiddleware, getTodayWeather)

export default todayRouter