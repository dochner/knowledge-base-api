const categoryEntity = require('./category.entity')

const findAll = async () => {
  return categoryEntity.find().populate('parentId')
}

const findById = (id) => {
  return categoryEntity.findById(id).populate('parentId')
}

const findByName = (name) => {
  return categoryEntity.findOne({ name }).populate('parentId')
}

const create = async (category) => {
  return categoryEntity.create(category)
}

const deleteById = async (id) => {
  return categoryEntity.findByIdAndDelete(id).populate('parentId')
}

const deleteAll = async () => {
  return categoryEntity.deleteMany()
}

const update = async (id, category) => {
    categoryEntity.updateOne({ _id: id }, category)
    return categoryEntity.findById(id).populate('parentId')
}

module.exports = {
  findAll,
  findById,
  findByName,
  create,
  deleteById,
  deleteAll,
  update
}