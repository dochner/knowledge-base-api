require('dotenv').config()
const express = require('express')
const cors = require('cors')
const consign = require('consign')
const PORT = process.env.PORT || 3000

const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, X-Requested-With, Origin'
  )
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS'
  )
  next()
})

app.use(
  cors({
    credentials: true,
    origin: true,
  })
)

app.options('*', cors())

app.use(express.static('./public'))
app.get('/', (req, res) => {
  res.sendFile('./public/index.html')
})

consign()
  .include('./src/infrastructure/mongoose.js')
  .then('./src/modules/user/user.controller.js')
  .then('./src/modules/category/category.controller.js')
  .then('./src/modules/article/article.controller.js')
  .into(app)

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
