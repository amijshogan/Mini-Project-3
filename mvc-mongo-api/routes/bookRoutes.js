const express = require("express");
const { getBooks, createBook } = require("../controllers/bookController");

const router = express.Router();

// Map HTTP methods to Controller function
router.get("/", getBooks);
router.post("/", createBook);

// Exports
module.exports = {
  bookRouter: router,
};
