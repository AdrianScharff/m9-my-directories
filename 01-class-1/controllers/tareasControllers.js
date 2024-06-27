const getTareas = (req, res) => {
  res.status(200).json({ message: 'getTareas' })
}

const createTareas = (req, res) => {
  res.status(201).json({ message: 'createTareas' })
}

const updateTareas = (req, res) => {
  res.status(200).json({ message: `Modify task ${req.params.id}` })
}

const deleteTareas = (req, res) => {
  res.status(200).json({ message: `Delete task ${req.params.id}` })
}

module.exports = {
  getTareas,
  createTareas,
  updateTareas,
  deleteTareas
}