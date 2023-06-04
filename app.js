const express = require('express');
const morgan = require('morgan');
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('DB CONNECTED');
  })
  .catch((err) => {
    console.log(`DB connection error: ${err}`);
  });

const postRoutes = require('./routes/post');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', postRoutes);

app.listen(port, () => {
  console.log(`API is listening on port: ${port}`);
});
