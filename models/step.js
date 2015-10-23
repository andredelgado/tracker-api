var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Step = mongoose.model('Step', new Schema({
  id: ObjectId,
  steps: String,
  date: String,
  updated_at: { type: Date, default: Date.now }
}));

module.exports = Step;
