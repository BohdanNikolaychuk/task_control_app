const express = require('express');
const morgan = require('morgan');

const app = express();
const mongoose = require('mongoose');

const router = require('./routers/dashboardsRouter');

const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://admin:admin@cluster0.gecldbo.mongodb.net/test?retryWrites=true&w=majority');

app.use(morgan('tiny'));



app.use('/', router)


const start = async () => {
  try {
    app.listen(8080);
  } catch (err) {
    console.error(`Error on server startup: ${err.message}`);
  }
};

start();