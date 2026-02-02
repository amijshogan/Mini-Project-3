const express = require("express");
const {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

const router = express.Router();

// Map HTTP methods to Controller function
// /api/books
router.get("/", getBooks);
router.post("/", createBook);

// /api/books/:id
// The ':id' is a placeholder for the actual Book ID
router.put("/:id", updateBook); // put is when you are putting in ALL new data, for each category
router.patch("/:id", updateBook); // patch means fixing only what needs to be fixed (so not everything like with put)
// both are ways/protocols for updating data
router.delete(":/id", deleteBook);

// Exports
module.exports = {
  bookRouter: router,
};
