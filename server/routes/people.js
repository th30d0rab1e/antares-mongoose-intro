var express = require('express');
var router = express.Router();
var Person = require('../models/person');

router.get('/', function(req, res) {
  Person.find({}, function(err, data) {
    if(err) {
      console.log('ERR: ', err);
      sendStatus(500);
      return;
    }

    res.send(data);
  });
});

router.post('/', function(req, res) {
  var addedPerson = new Person(req.body);

  addedPerson.save(function(err, data) {
    if(err) {
      console.log('ERR: ', err);
      sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });

});

router.delete('/:id', function(req, res) {
  Person.findByIdAndRemove(
    { _id : req.params.id },
    function(err, data) {
      if(err) {
        console.log('ERR: ', err);
        res.sendStatus(500);
      } else {
        res.send(data);
      }
    }
  );
});

router.put('/:id', function(req, res){
  var newName = req.body.name;
  Person.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: {name: newName} },
    function(err, data) {
      if(err) {
          console.log('ERR: ', err);
      } else {
        // data is given to us if we want. it's the mongoose object
        res.send(data);
      }
    }
  );

});

// Searching
router.post('/search', function(req, res) {
  var name = req.body;
  console.log('search query: ', name);
  // 'like' matching with simple RegEx
  Person.find(
    { name: new RegExp(name.findName, 'i') },
    function(err, data) {
      if(err) {
        console.log("Error: ", err);
        res.sendStatus(500);
      } else {
        res.send(data);
      }
    }
  );

});

module.exports = router;
