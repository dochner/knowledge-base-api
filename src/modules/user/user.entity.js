const mongoose = require('mongoose')
const userSchema = require('./user.schema.js')

module.exports = mongoose.model('User', userSchema)
