const express = require('express');
const cors = require('cors'); // Import CORS
require('dotenv').config(); // Load .env variables

const app = express();
const port = process.env.PORT || 3000;
const emailRoutes = require('./route'); // Import routes

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL || '*' })); // Allow frontend requests
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests

// Use Routes
app.use('/api', emailRoutes); // Prefix all email routes with /api

// Start Server
app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;