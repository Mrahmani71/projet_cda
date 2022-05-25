const express = require('express')
const router = express.Router()

// Middleware
const {testMiddleware} = require('../middlewares/test')
// Controllers
const { getTodayWeather } = require("../controllers/today.controller.js")
// Router

// Config Router API
router.route('/:ville').get(testMiddleware, getTodayWeather)

module.exports = router