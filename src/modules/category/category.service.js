const categoryRepository = require('./category.repository')

const findAll = async () => await categoryRepository.findAll()
const findById = (id) => categoryRepository.findById(id)
const findByName = (name) => categoryRepository.findByName(name)
const create = async (category) => await categoryRepository.create(category)
const deleteById = async (id) => await categoryRepository.deleteById(id)
const deleteAll = async () => await categoryRepository.deleteAll()
const update = async (id, category) => await categoryRepository.update(id, category)

module.exports = {
  findAll,
  findById,
  findByName,
  create,
  deleteById,
  deleteAll,
  update
}