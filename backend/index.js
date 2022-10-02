const express = require('express');
const morgan = require('morgan');

const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));



const DashBoards_Router = require('./routers/DashBoards.Router');
const Boards_Router = require('./routers/Boards.Router');
const Auth_Router = require('./routers/Auth.Router');




app.use('/', DashBoards_Router);
app.use('/', Boards_Router);
// app.use('/', Auth_Router);
const start = async () => {
  try {
    app.listen(8080);
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.gecldbo.mongodb.net/test?retryWrites=true&w=majority');
    console.log(`Server run 8080`);
  } catch (err) {
    console.error(`Error on server startup: ${err.message}`);
  }
};

start();