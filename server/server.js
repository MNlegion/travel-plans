const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();


const app = express();

app.use('/api/itineraries', require('./routes/itineraryRoutes'));


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 