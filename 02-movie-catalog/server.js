const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const movieRoutes = require('./routes/movieRoutes')
const connectDB = require('./config/db')

connectDB()

const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/v1/', movieRoutes)

app.listen(port, () => {
  console.log(`server running on port ${port} 🔥`);
})