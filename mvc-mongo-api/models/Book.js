const mongoose = require("mongoose");

/**
 * User Schema
 * Defines the structure for User documents in MongoDB
 */

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Read the room. Title of text is required. 📖"],
  },

  author: {
    type: String,
    required: [true, "Read the room. Author of text is required. 🧟"],
  },

  year: {
    type: Number,
    min: 1632,
    max: 1674,
    required: [true, "Read the room. Year of publication is required. 📆"],
  },

  text: {
    type: String,
    required: [true, "Read the room. Text content is required. 📜"],
  },

  email: {
    type: String,
    required: [true, "Email is required. 💌"],
    unique: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "Please use a valid email address 🤬"],
  },

  createdBy: {
    type: String,
    required: [true, "Identifier required; nicknames allowed. 🥷🏽"],
    unique: true,
  },

  role: {
    type: String,
    enum: ["lurker", "contributor"],
    default: ["lurker", "contributor"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the model from the Schema
const Book = mongoose.model('Book', bookSchema);

// Exports
module.exports = {
    Book,
};