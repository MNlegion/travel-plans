const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Itineraries');
});

router.get('/test', (req, res) => {
  res.send('Itineraries Test');
});


module.exports = router;