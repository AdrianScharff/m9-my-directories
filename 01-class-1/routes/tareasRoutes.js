const express = require('express')
const router = express.Router()
const { getTareas, crearTareas, updateTareas, deleteTareas } = require('../controllers/tareasControllers')

router.post('/', crearTareas)
router.get('/', getTareas)
router.put('/:id', updateTareas)
router.delete('/:id', deleteTareas)

module.exports = router