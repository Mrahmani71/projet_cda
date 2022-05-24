const express = require('express')
const router = express.Router()

// Middleware
const {testMiddleware} = require('../middlewares/test')
// Controllers
const { getTodayWeather, postTodayWeather } = require("../controllers/today.controller.js")
// Router

// Config Router API
router.route('/:ville').get(testMiddleware, getTodayWeather)
router.route('/').post(testMiddleware, postTodayWeather)


module.exports = router