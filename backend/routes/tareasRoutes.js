const express = require('express')
const router = express.Router()
const {getTareas, createTareas, updateTareas, deleteTareas}=require('../Controllers/tareasController')

const portect = require('../middleware/authMiddleware')

router.get('/', portect, getTareas)
router.post('/', portect, createTareas)

router.put('/:id', portect, updateTareas)
router.delete('/:id', portect, deleteTareas)

module.exports = router
