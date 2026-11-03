const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/usersModel')

const protect = asyncHandler(async (req, res, next) => {
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            const token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.id_usuario).select('-password')
            if (!req.user) throw new Error('Usuario no encontrado')
            return next()
        } catch (error) {
            res.status(401)
            throw new Error('Acceso no autorizado')
        }
    }
    res.status(401)
    throw new Error('Acceso no autorizado, no se proporcionó ningún token')
})

module.exports = protect