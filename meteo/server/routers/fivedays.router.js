const express = require('express')
const router = express.Router()

// Middleware
const {testMiddleware} = require('../middlewares/test')
// Controllers
const { getFiveWeather, postFiveWeather } = require("../controllers/fivedays.controller.js")
// Router

// Config Router API
router.route('/:ville').get(testMiddleware, getFiveWeather)
router.route('/').post(testMiddleware, postFiveWeather)


module.exports = router