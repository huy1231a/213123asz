const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

const router = require("./router.js");

mongoose.connect('mongodb+srv://nqhuydev:Huybeo1ga@nqhuydev.e0kr1f9.mongodb.net/dashboard', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

app.use(bodyParser.json());

app.use("/", router);

app.listen(port, () => {
  console.log(`Connect sucess port ${port}`);
});
