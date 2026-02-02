const { Book } = require("../models/Book");

/**
 * Get all BOOKS.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Promise<void>}
 */

// functionality for finding book/text
const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({ success: true, data: books });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Create a new book entry.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Promise<void>}
 */
// functionality for creating book/text
const createBook = async (req, res) => {
  try {
    const { title, author, year, text, email, createdBy } = req.body;
    const book = await Book.create({
      title,
      author,
      year,
      text,
      email,
      createdBy,
    });
    res.status(201).json({ success: true, data: book });
  } catch (error) {
    // Handle duplicate email or createdBy
    res.status(400).json({ success: false, error: error.message });
  }
};

/**
 * Update a book by ID.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Promise<void>}
 */
const updateBook = async (req, res) => {
  try {
    const { id } = req.params; // object that will hold all the url parameters -- /books/#
    const updates = req.body;
    console.log(updates); // should be "null" or "undefined" since I'm not sending a body
    const book = await Book.findByIdAndUpdate(id, updates, { new: true });
    if (!book) {
      return res.status(404).json({ success: false, error: "Book not found" });
    }
    res.status(200).json({ success: true, data: book });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

/**
 * Delete a book by ID. :(
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Promise<void>}
 */
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).json({ success: false, error: "Book not found" });
    }
    res.status(200).json({ success: true, message: book }); // book deleted
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Exports
module.exports = {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
};
