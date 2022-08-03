const articleRepository = require('./article.repository')

const findAll = () => articleRepository.findAll()
const findById = (id) => articleRepository.findById(id)
const findByName = (name) => articleRepository.findByName(name)
const create = (article) => articleRepository.create(article)
const deleteById = (id) => articleRepository.deleteById(id)
const deleteAll = () => articleRepository.deleteAll()
const update = (id, article) => articleRepository.update(id, article)

module.exports = {
  findAll,
  findById,
  findByName,
  create,
  deleteById,
  deleteAll,
  update,
}
