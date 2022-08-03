const categoryRepository = require('./category.repository')

const findAll = async () => categoryRepository.findAll()
const findById = (id) => categoryRepository.findById(id)
const findByName = (name) => categoryRepository.findByName(name)
const create = async (category) => categoryRepository.create(category)
const deleteById = async (id) => categoryRepository.deleteById(id)
const deleteAll = async () => categoryRepository.deleteAll()
const update = async (id, category) => categoryRepository.update(id, category)

module.exports = {
  findAll,
  findById,
  findByName,
  create,
  deleteById,
  deleteAll,
  update,
}
