const userService = require('./user.service')

module.exports = (app) => {
  // GET /api/v1/users
  app.get('/api/v1/users', async (req, res) => {
    userService.findAll().then((allusers) => res.json(allusers))
  })

  // GET /api/v1/users/:id
  app.get('/api/v1/users/:id', async (req, res) => {
    userService.findById(req.params.id).then((user) => res.json(user))
  })

  // GET /api/v1/users/:name
  app.get('/api/v1/users/:name', async (req, res) => {
    userService.findByName(req.params.name).then((user) => res.json(user))
  })

  // DELETE /api/v1/users/:id
  app.delete('/api/v1/users/:id', async (req, res) => {
    userService.deleteById(req.params.id).then(() => res.sendStatus(204))
  })

  // DELETE /api/v1/users
  app.delete('/api/v1/users', async (req, res) => {
    userService.deleteAll().then(() => res.sendStatus(204))
  })

  // POST /api/v1/users
  app.post('/api/v1/users', async (req, res) => {
    userService.create(req.body).then((user) => res.json(user))
  })

  // PUT /api/v1/users/:id
  app.put('/api/v1/users/:id', async (req, res) => {
    userService.update(req.params.id, req.body).then((user) => res.json(user))
  })
}
