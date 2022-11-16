const { Router } = require('express');
const red = require('../middleware/red');
const blue = require('../middleware/blue');
const colors = require('../middleware/colors');

// what middleware does this route need to pass?
module.exports = Router().get('/purple', [colors, red, blue], (req, res, next) => {
  res.json(req.colors);
  next();
});
