const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: email, unique: true, required: true },
  password: { type: password, required: true },
}, { timestamps: true })

const userModel = mongoose.model('User', userSchema)

module.exports = userModel