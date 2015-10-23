var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var path = require('path');

var config = require('./config');

var port = process.env.PORT || 8675;
mongoose.connect(config.database);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use(require('./routes'));

app.listen(port, function() {
  console.log('Magic happens at http://localhost:' + port);
});
