const express = require('express')
const router = express.Router()

// Middleware
const {testMiddleware} = require('../middlewares/test')
// Controllers
const { getFiveWeather } = require("../controllers/fivedays.controller.js")


// Config Router API
router.route('/:ville').get(testMiddleware, getFiveWeather)

module.exports = router