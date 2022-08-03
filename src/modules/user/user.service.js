const userRepository = require('./user.repository')

const findAll = async () => userRepository.findAll()
const findById = (id) => userRepository.findById(id)
const findByName = (name) => userRepository.findByName(name)
const create = async (user) => userRepository.create(user)
const deleteById = async (id) => userRepository.deleteById(id)
const deleteAll = async () => userRepository.deleteAll()
const update = async (id, user) => userRepository.update(id, user)

module.exports = {
  findAll,
  findById,
  findByName,
  create,
  deleteById,
  deleteAll,
  update,
}
