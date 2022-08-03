const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: true,
    },
    categories: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Category',
      required: false,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    draft: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  { collection: 'articles', timestamps: true }
)

module.exports = articleSchema
