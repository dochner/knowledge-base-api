const userEntity = require('./user.entity')

const findAll = async () => {
  return userEntity.find()
}

const findById = (id) => {
  return userEntity.findById(id)
}

const findByName = (name) => {
  return userEntity.findOne({ name })
}

const create = async (user) => {
  return userEntity.create(user)
}

const deleteById = async (id) => {
  return userEntity.findByIdAndDelete(id)
}

const deleteAll = async () => {
  return userEntity.deleteMany()
}

const update = async (id, user) => {
  userEntity.updateOne({ _id: id }, user)
  return userEntity.findById(id)
}

module.exports = {
  findAll,
  findById,
  findByName,
  create,
  deleteById,
  deleteAll,
  update,
}
