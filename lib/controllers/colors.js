const { Router } = require('express');
const red = require('../middleware/red');
const blue = require('../middleware/blue');
const colors = require('../middleware/colors');
const yellow = require('../middleware/yellow');

// what middleware does this route need to pass?
module.exports = Router()
  .get('/purple', [colors, red, blue], (req, res, next) => {
    res.json(req.colors);
    next();
  })
  .get('/orange', [red, yellow], (req, res, next) => {
    res.json(req.colors);
    next();
  })
  .get('/green', [yellow, blue], (req, res, next) => {
    res.json(req.colors);
    next();
  })
  .get('/red-orange', [red, red, yellow], (req, res, next) => {
    res.json(req.colors);
    next();
  })
  .get('/blue-green', [blue, blue, yellow], (req, res, next) => {
    res.json(req.colors);
    next();
  });
