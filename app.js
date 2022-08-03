require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Origin');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next();
});

app.use(cors({
  credentials: true,
  origin: true,
}));

app.options('*', cors());

const mongooseURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.czrpt.gcp.mongodb.net/?retryWrites=true&w=majority`;

try {
  mongoose.connect(mongooseURI, {
    // @ts-ignore
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log('Connected to MongoDB');
} catch (error) {
  console.log('Error connecting to Mongo database');
}

require('./src/modules/category/category.controller')(app);
require('./src/modules/user/user.controller')(app);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
