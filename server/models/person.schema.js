var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the Schema
var personSchema = new Schema({
  name: {type: String, required: true, unique: true},
  location: {type: String}
});

// export our model
module.exports = mongoose.model('Person', personSchema);
