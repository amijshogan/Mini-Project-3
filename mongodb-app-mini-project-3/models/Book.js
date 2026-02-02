const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    min: 1632,
    max: 1674,
    required: true,
  },
  text: {
    type: String,
    minlength: 1,
  },

  createdBy: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
