const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Itineraries');
});

router.post('/', (req, res) => {
  res.send('Itinerary created');
});

router.put('/:id', (req, res) => {
  res.send('Itinerary updated');
});

router.delete('/:id', (req, res) => {
  res.send('Itinerary deleted');
});


module.exports = router;