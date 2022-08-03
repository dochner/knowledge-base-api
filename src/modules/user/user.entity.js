const mongoose = require('mongoose')
const userSchema = require('./user.schema.js')

const userEntity = mongoose.model(
  'User',
  userSchema,
);

module.exports = userEntity;