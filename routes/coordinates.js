var express = require('express');
var router = express.Router();
var Step = require('../models/coordinate');
var path = require('path');
var Success = require(path.join(__dirname, "..", "helpers", "Success.js"));
var Coordinate = require('../models/coordinate');

router.get('/', function(req, res) {
  Coordinate.find(function(err, coordinates) {
      res.json(new Success(coordinates));
  });
});

router.post('/', function(req, res) {
  var coordinates = new Coordinate({
    lat: req.body.latitude,
    lon: req.body.longitude
  });

  coordinates.save(function(err) {
    res.json(new Success({ latitude: req.body.latitude, longitude: req.body.longitude }));
  });
});

module.exports = router;
