const express = require('express')
const createOneMovie = require('../controllers/movieControllers').createOneMovie
const getAllMovies = require('../controllers/movieControllers').getAllMovies
const updateOneMovie = require('../controllers/movieControllers').updateOneMovie
const deleteOneMovie = require('../controllers/movieControllers').deleteOneMovie

const router = express.Router()

router.post('/movies', createOneMovie)
router.get('/movies', getAllMovies)
router.put('/movies/:id', updateOneMovie)
router.delete('/movies/:id', deleteOneMovie)

module.exports = router