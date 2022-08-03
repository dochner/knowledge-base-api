const articleService = require('./article.service')

module.exports = (app) => {
  // GET /api/v1/articles
  app.get('/api/v1/articles', async (req, res) => {
    articleService.findAll().then((allArticles) => res.json(allArticles))
  })

  // GET /api/v1/articles/:id
  app.get('/api/v1/articles/:id', async (req, res) => {
    articleService.findById(req.params.id).then((article) => res.json(article))
  })

  // GET /api/v1/articles/:name
  app.get('/api/v1/articles/:name', async (req, res) => {
    articleService
      .findByName(req.params.name)
      .then((article) => res.json(article))
  })

  // DELETE /api/v1/articles/:id
  app.delete('/api/v1/articles/:id', async (req, res) => {
    articleService.deleteById(req.params.id).then(() => res.sendStatus(204))
  })

  // DELETE /api/v1/articles
  app.delete('/api/v1/articles', async (req, res) => {
    articleService.deleteAll().then(() => res.sendStatus(204))
  })

  // POST /api/v1/articles
  app.post('/api/v1/articles', async (req, res) => {
    articleService.create(req.body).then((article) => res.json(article))
  })

  // PUT /api/v1/articles/:id
  app.put('/api/v1/articles/:id', async (req, res) => {
    articleService
      .update(req.params.id, req.body)
      .then((article) => res.json(article))
  })
}
