myApp.controller('PeopleController', ['$http', function($http) {
    var self = this;
    self.people = [];
    self.newPerson = {};

    // Start app
    getData();

    // Get all people
    function getData() {

    }

    // add person
    self.addPerson = function() {
      console.log('add person');
    };

    // delete person
    self.deletePerson = function(id) {
      console.log('delete person');
    }

    // update person
    self.updatePerson = function(id) {
      console.log('update person');
    }

}]);
