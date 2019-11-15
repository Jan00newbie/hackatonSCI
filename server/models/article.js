const mongoose = require('mongoose')

const Article = mongoose.model('Article', new mongoose.Schema({
  title: {
    type: String,
    minlength: 8,
    maxlength: 64,
    required: true
  },
  strip: {
    type: String,
    minlength: 8,
    maxlength: 64,
    unique: true,
    required: true
  },
  content: {
    type: [Object],
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  tags: {
    type: [String],
    minlength: 1,
    required: true
  },
  isPublished: {
    type: Boolean,
    default: true
  }
}))

module.exports = Article