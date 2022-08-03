const mongoose = require('mongoose')

const mongooseURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.czrpt.gcp.mongodb.net/?retryWrites=true&w=majority`

try {
  mongoose.connect(mongooseURI, {
    // @ts-ignore
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log('Connected to MongoDB')
} catch (error) {
  console.log('Error connecting to Mongo database')
}
