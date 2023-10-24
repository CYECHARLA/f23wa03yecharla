var express = require('express');
var router = express.Router();

// ... (existing code)

/* GET computation result. */
router.get('/computation', function(req, res, next) {
  const randomValue = req.query.x ? parseFloat(req.query.x) : Math.random() * 10; // Generate a random value between 0 and 10 or use the provided query value
  const result = Math.atan2(randomValue, randomValue); // Apply Math.atan2() function

  res.send(`Math.atan2() applied to ${randomValue} is ${result}`);
});

module.exports = router;
