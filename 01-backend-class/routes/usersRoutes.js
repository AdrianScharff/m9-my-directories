const express = require('express')
const router = express.Router()
const { login, register, data } = require('../controllers/usersControllers')
const { protect } = require('../middleware/authMiddleware')

// public endpoints
router.post('/login', login)
router.post('/register', register)

// private endpoint
router.get('/data', protect, data)

module.exports = router