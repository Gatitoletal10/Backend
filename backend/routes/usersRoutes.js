const express = require('express')
const router = express.Router()
const protect = require('../middleware/authMiddleware')

const { crearUser, loginUser, datosUser } = require('../Controllers/usersControllers')

//endpoints publicos
router.post('/login', loginUser)
router.post('/', crearUser)

//endpoint privado
router.get('/datos', protect, datosUser)

module.exports = router