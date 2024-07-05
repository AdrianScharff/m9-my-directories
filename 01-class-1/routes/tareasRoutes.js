const express = require('express')
const router = express.Router()
const { getTareas, crearTareas, updateTareas, deleteTareas } = require('../controllers/tareasControllers')
const { protect } = require('../middleware/authMiddleware')

router.post('/', protect, crearTareas)
router.get('/', protect, getTareas)

router.put('/:id', protect, updateTareas)
router.delete('/:id', protect, deleteTareas)

module.exports = router