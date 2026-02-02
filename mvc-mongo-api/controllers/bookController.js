const { Book } = require("..models/Book");

/**
 * Get all BOOKS.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Promise<void>}
 */

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

// Exports
module.exports = {
  getBooks,
  createBook,
};
