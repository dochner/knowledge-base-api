const categoryService = require('./category.service')

module.exports = (app) => {
  // GET /api/v1/categories
  app.get('/api/v1/categories', async (req, res) => {
    categoryService.findAll()
      .then((allCategories) => res.json(allCategories))
  });

  // GET /api/v1/categories/:id
  app.get('/api/v1/categories/:id', async (req, res) => {
    categoryService.findById(req.params.id)
      .then((category) => res.json(category))
  });

  // GET /api/v1/categories/:name
  app.get('/api/v1/categories/:name', async (req, res) => {
    categoryService.findByName(req.params.name)
      .then((category) => res.json(category))
  });

  // DELETE /api/v1/categories/:id
  app.delete('/api/v1/categories/:id', async (req, res) => {
    categoryService.deleteById(req.params.id)
      .then(() => res.sendStatus(204))
  });

  // DELETE /api/v1/categories
  app.delete('/api/v1/categories', async (req, res) => {
    categoryService.deleteAll()
      .then(() => res.sendStatus(204))
  });

  // POST /api/v1/categories
  app.post('/api/v1/categories', async (req, res) => {
    categoryService.create(req.body)
      .then((category) => res.json(category))
  });

  // PUT /api/v1/categories/:id
  app.put('/api/v1/categories/:id', async (req, res) => {
    categoryService.update(req.params.id, req.body)
      .then((category) => res.json(category))
  });
}