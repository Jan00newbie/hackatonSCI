const mongoose = require('mongoose')

const User = mongoose.model('User', new mongoose.Schema({
  username: {
    type: String,
    minlength: 4,
    maxlength: 16,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  superUser: {
    type: Boolean,
    default: false
  }
}))

module.exports = User