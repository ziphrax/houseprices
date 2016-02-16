var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TerracedSchema = new Schema({
  'Year' : Number,
  'Quater' : String,
  'Period' : String,
  "NORTH" : Number,
  "YORKS & HSIDE" : Number,
  "NORTH WEST" : Number,
  "EAST MIDS" : Number,
  "WEST MIDS" : Number,
  "EAST ANGLIA" : Number,
  "OUTER S EAST" : Number,
  "OUTER MET" : Number,
  "LONDON" : Number,
  "SOUTH WEST" : Number,
  "WALES" : Number,
  "SCOTLAND" : Number,
  "N IRELAND" : Number,
  "UK" : Number
},{collection: 'terraced'});

module.exports = mongoose.model('terraced',TerracedSchema);
