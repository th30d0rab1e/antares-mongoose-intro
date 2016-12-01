var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var index = require('./routes/index');
var people = require('./routes/people');
var mongoose = require('mongoose');


/** ---------- MIDDLEWARE ---------- **/
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json()); // needed for angular requests

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/person', people);
app.use('/', index);

/** ---------- MONGOOSE CONNECTION HANDLING ---------- **/
var databaseUri = 'mongodb://localhost:27017/sigma';
mongoose.connect(databaseUri);

mongoose.connection.on('connected', function() {
  console.log('mongoose connected to ', databaseUri);
});

mongoose.connection.on('error', function(err) {
  console.log('mongoose connection error: ', err);
});

/** ---------- START SERVER ---------- **/
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
