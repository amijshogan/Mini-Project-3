const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const { Server } = require("socket.io");
require("dotenv").config();

// Import the Router
const { bookRouter } = require("../routes/bookRoutes.js"); // not sure if this is the correct location for this line atm
const app = express();

// Init Socket.io on the HTTP server
const io = new Server(server);

// Middleware to parse JSON bodies
app.use(express.json());

//Mount the Router (Mount the User Routes)
app.use("/api/books", bookRoutes); // need to check if this path is correct
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
