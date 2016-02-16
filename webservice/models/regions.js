var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var RegionSchema = new Schema({
  Region : String,
  Name : String
},{collection: 'regions'});

module.exports = mongoose.model('region',RegionSchema);
