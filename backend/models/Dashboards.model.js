const mongoose = require('mongoose');


const DashBoardsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    trim: true
  },
  desc: {
    type: String,
    required: true,
    minlength: 2,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },

})


const DashBoards = mongoose.model('DashBoards', DashBoardsSchema);

module.exports = { DashBoards }