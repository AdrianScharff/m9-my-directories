const createOneMovie = (req, res) => {
  res.status(201).json({ message: "Here I can create a movie" })
}

const getAllMovies = (req, res) => {
  res.status(200).json({ message: "Here are all the movies" })
}

const updateOneMovie = (req, res) => {
  const id = req.params.id
  res.status(200).json({ message: `Here I can update the movie with id: ${id}` })
}

const deleteOneMovie = (req, res) => {
  const id = req.params.id
  res.status(200).json({ message: `Here I can delete the movie with id: ${id}` })
}

module.exports = {
  createOneMovie,
  getAllMovies,
  updateOneMovie,
  deleteOneMovie
}