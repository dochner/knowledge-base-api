const mongoose = require('mongoose')
const articleSchema = require('./article.schema')

module.exports = mongoose.model('Article', articleSchema)
