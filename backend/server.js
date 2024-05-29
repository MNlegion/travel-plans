const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;


const app = express();

app.use('/api/itineraries', require('./routes/itineraryRoutes'));


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 