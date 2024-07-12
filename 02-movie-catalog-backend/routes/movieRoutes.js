const express = require('express')
const createOneMovie = require('../controllers/movieControllers').createOneMovie
const getAllMovies = require('../controllers/movieControllers').getAllMovies
const updateOneMovie = require('../controllers/movieControllers').updateOneMovie
const deleteOneMovie = require('../controllers/movieControllers').deleteOneMovie
const updateLikes = require('../controllers/movieControllers').updateLikes
const { protect } = require('../middlewares/authMiddleware')
const { isAdmin } = require('../middlewares/isAdmin')

const router = express.Router()

router.post('/movies', protect, isAdmin, createOneMovie)
router.get('/movies', getAllMovies)
router.put('/movies/:id', protect, isAdmin, updateOneMovie)
router.put('/movies/likes/:id', protect, updateLikes)
router.delete('/movies/:id', protect, isAdmin, deleteOneMovie)

module.exports = router