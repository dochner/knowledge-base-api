const userRepository = require('./user.repository')

const findAll = async () => await userRepository.findAll()
const findById = (id) => userRepository.findById(id)
const findByName = (name) => userRepository.findByName(name)
const create = async (user) => await userRepository.create(user)
const deleteById = async (id) => await userRepository.deleteById(id)
const deleteAll = async () => await userRepository.deleteAll()
const update = async (id, user) => await userRepository.update(id, user)

module.exports = {
  findAll,
  findById,
  findByName,
  create,
  deleteById,
  deleteAll,
  update
}