const mongoose = require('mongoose');

const BoardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    trim: true
  },
  dashId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  status: {
    type: String,
    default: "TODO",
    enum: ['TODO', "INPROGRESS", 'DONE'],
    required: true,
  }

})

const Boards = mongoose.model('Boards', BoardSchema);

module.exports = { Boards }