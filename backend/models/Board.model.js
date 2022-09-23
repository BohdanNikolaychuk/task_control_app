const mongoose = require('mongoose');

const BoardSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    trim: true
  },
  dashId: {
    type: mongoose.Types.ObjectId,
    required: true,

  }
})

const Boards = mongoose.Model('Boards', BoardSchema);

module.exports = { Boards }