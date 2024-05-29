const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;


const app = express();

app.get('/api/itineraries', (req, res) => {
  res.status(200).json({ message: 'Hello from server!' });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 