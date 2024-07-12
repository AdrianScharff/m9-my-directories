const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')

const register = asyncHandler(async (req, res) => {
  const body = req.body

  if (!body.name || !body.email || !body.password) {
    res.status(404)
    throw new Error('Please provide name, email and password')
  }

  const userExists = await User.findOne({ email: body.email })
  if (userExists) {
    res.status(400)
    throw new Error('The user for this email already exists')
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(body.password, salt)

  const newUser = await User.create({
    name: body.name,
    email: body.email,
    password: hashedPassword
  })

  if (newUser) {
    res.status(201).json({
      _id: newUser.id,
      name: newUser.name,
      email: newUser.email
    })
  } else {
    res.status(400)
    throw new Error('Incorrect data')
  }
})

const login = asyncHandler(async (req, res) => {
  // const { email, password } = req.body

  // if (!email || !password) {
  //   res.status(400)
  //   throw new Error('Email or password is missing')
  // }

  // const user = User.findOne({ email: email })
  // if (user) {
  //   res.status(400)
  //   throw new Error('Incorrect email or password')
  }




})

module.exports = {
  register,
  login
}