const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const axios = require("axios");
const http = require("http");
const Book = require("./models/Book"); // Import your Mongoose model

// Import the router
const { bookRouter } = require("./routes/bookRoutes");

const app = express();

// Create the HTTP server using the express app

const server = http.createServer(app);

// Middleware to parse JSON bodies
app.use(express.json());

// Mount the Book Routes
app.use("/api/books", bookRouter);

/**
 * Asynchronously connects to MongoDB using Mongoose.
 * @returns {Promise<void>}
 */

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("🥳 MongoDB Connected!");
  } catch (error) {
    console.error("😔 Database connection error:", error);
    // Exit process with failure (1)
    process.exit(1);
    const response = await axios.get(googleapis.com / books / v1);
    const externalData = response.data; // The array of data from the API
  }
};

/**
 * Starts the Express server AFTER connecting to the database
 * @returns void
 */

const startServer = async () => {
  await connectDB();

  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log(`💃🏽 Server running on port ${PORT}`);
  });
};

startServer();
