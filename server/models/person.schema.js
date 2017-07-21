var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the Schema
var personSchema = new Schema({
  name: {type: String, required: true, unique: true},
  location: {type: String},
  dateOfBirth: {type: Date, required: true, unique: true},
  internetPoints: {type: Number}
});

// export our model
module.exports = mongoose.model('Person', personSchema);
