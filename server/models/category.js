const mongoose = require('mongoose')

const Category = mongoose.model('Category', new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 16,
    required: true
  },
  strip: {
    type: String,
    minlength: 3,
    maxlength: 16,
    required: true,
    unique: true
  }
}))

module.exports = Category