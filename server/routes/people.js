var express = require('express');
var router = express.Router();
var Person = require('../models/person');

router.get('/', function(req, res) {
    console.log('here');
    Person.find({}, function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        res.send(data);
    });
});

router.post('/', function(req, res) {
    var addedPerson = new Person({
        "name": req.body.name,
        "location": req.body.location
    });

    addedPerson.save(function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        Person.find({}, function(err, data) {
            if(err) {
                console.log('ERR: ', err);
            }

            res.send(data);
        });
    });


});

router.delete('/:id', function(req, res) {
    Person.findByIdAndRemove({"_id" : req.params.id}, function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        res.send(data);
    });
});

router.put('/:id', function(req, res){
    var newName = req.body.name;
    Person.findByIdAndUpdate(
        {_id: req.params.id},
        {
            $set: {name: newName}
        },
        function(err, data) {
            if(err) {
                console.log('ERR: ', err);
            }

            res.send(data);
        }
    );

});

module.exports = router;
