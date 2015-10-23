var express = require('express');
var router = express.Router();
var Step = require('../models/coordinate');
var path = require('path');
var Success = require(path.join(__dirname, "..", "helpers", "Success.js"));
var Step = require('../models/step');

router.get('/', function(req, res) {
  Step.find(function(err, steps) {
      res.json(new Success(steps));
  });
});

router.post('/', function(req, res) {
  Step.findOne({ date: req.body.date }, function (err, step) {
    if(!step) {
      var steps = new Step({
        steps: req.body.steps,
        date: req.body.date
      });

      steps.save(function(err) {
        res.json(new Success({steps: req.body.steps, date: req.body.date}));
      });
    } else {
      step.steps += req.body.steps;
      step.save(function(err) {
        res.json(new Success({steps: req.body.steps}));
      });
    }
  });

});

module.exports = router;
