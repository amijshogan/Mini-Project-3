const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const Book = require('./models/book'); // not sure if this is the correct location for this line atm

// Middleware to parse JSON bodies
app.use(express.json());

/**
 * Asynchronously connects to MongoDB using Mongoose.
 * @returns (Promise<void>)
 */

const connectDB = async () => {
  try {
    await mongoose.connect("process.env.MONGO_URI");
    console.log("✅MongoDB Connected");
  } catch (error) {
    console.error("❌Database connection error:", error);
    // Exit process with failure (1)
    process.exit(1);
  }
};

/**
 * Starts the Express server after connecting to the database
 * @returns void
 */
const startServer = async () => {
  await connectDB();

  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
