const express = require('express');
const morgan = require('morgan');

const app = express();
const mongoose = require('mongoose');


app.use(express.json());


mongoose.connect('mongodb+srv://admin:admin@cluster0.gecldbo.mongodb.net/test?retryWrites=true&w=majority');

app.use(morgan('tiny'));



app.use('/',)


const start = async () => {
  try {
    app.listen(8080);
  } catch (err) {
    console.error(`Error on server startup: ${err.message}`);
  }
};

start();