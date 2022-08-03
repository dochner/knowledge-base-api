const articleEntity = require('./article.entity')

const findAll = async () =>
  articleEntity.find().populate('categories').populate('author')

const findById = (id) =>
  articleEntity.findById(id).populate('categories').populate('author')

const findByName = (name) =>
  articleEntity.findOne({ name }).populate('categories').populate('author')

const create = async (article) => articleEntity.create(article)

const deleteById = async (id) =>
  articleEntity.findByIdAndDelete(id).populate('categories').populate('author')

const deleteAll = async () => articleEntity.deleteMany()

const update = async (id, article) =>
  articleEntity.updateOne({ _id: id }, article)

module.exports = {
  findAll,
  findById,
  findByName,
  create,
  deleteById,
  deleteAll,
  update,
}
