var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Coordinate = mongoose.model('Coordinate', new Schema({
  id: ObjectId,
  lat: String,
  lon: String,
  date: { type: Date, default: Date.now }
}));

module.exports = Coordinate;
