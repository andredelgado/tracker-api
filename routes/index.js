var express = require('express');
var router = express.Router();
var path = require('path');
var NotFoundError = require(path.join(__dirname, "..", "helpers", "NotFoundError.js"));

router.use(function(req, res, next) {
  console.log('Something is happening.');
  next();
});

router.use('/coordinates', require('./coordinates'));
router.use('/steps', require('./steps'));

router.use('*', function(req, res, next) {
  res.status(404).json(new NotFoundError("404"));
});

module.exports = router;
