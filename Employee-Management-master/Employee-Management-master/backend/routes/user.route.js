const express = require('express')
const { register, login, logout } = require('../controllers/user.controller.js')

const router = express.Router()

// Registration Route
router.post('/register', register)

// Login Route
router.post('/login', login)

// Logout Route
router.post('/logout', logout)

module.exports = router

