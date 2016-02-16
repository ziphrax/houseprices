var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TerracedSchema = new Schema({
  'Year' : Number,
  'Quater' : String,
  'Period' : String,
  "NORTH" : Number,
  "YORKS_AND_HSIDE" : Number,
  "NORTH_WEST" : Number,
  "EAST_MIDS" : Number,
  "WEST_MIDS" : Number,
  "EAST_ANGLIA" : Number,
  "OUTER_S_EAST" : Number,
  "OUTER_MET" : Number,
  "LONDON" : Number,
  "SOUTH_WEST" : Number,
  "WALES" : Number,
  "SCOTLAND" : Number,
  "N_IRELAND" : Number,
  "UK" : Number
},{collection: 'terraced'});

module.exports = mongoose.model('terraced',TerracedSchema);
