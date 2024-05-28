const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;


const app = express();

app.get('/api/itineraries', (req, res) => {
  res.send('Get Travel Plans');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 