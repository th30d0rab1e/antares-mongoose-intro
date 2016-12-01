myApp.controller('PeopleController', ['$http', function($http) {
    var self = this;
    self.people = [];
    self.newPerson = {};
    self.searchName = "";

    // Start app
    getData();

    // Get all people
    function getData() {
      $http.get('/person')
        .then(function(response) {
          self.people = response.data;
        },
        function(response) {
          console.log('error: ', response);
        });
    }

    // Searching
    self.search = function() {
      $http.post('/person/search', { findName: self.searchName} )
      .then(function(response) {
        console.log('here', response.data);
        self.people = response.data;
      },
      function(response) {
        console.log('search error: ', response);
      });
    }

    // add person
    self.addPerson = function() {
      $http.post('/person', self.newPerson)
        .then(function(response) {
          self.newPerson = {};
          document.getElementById('name').focus();
          getData();
        },
        function() {
          console.log('post error:', response);
        });
    };

    // delete person
    self.deletePerson = function(id) {
      console.log(id);
      $http.delete('/person/' + id)
        .then(function(response) {
          getData();
        },
        function(response) {
          console.log('delete error: ', response);
        });
    }

    // update person
    self.updatePerson = function(id) {
      console.log(id);
      var data = {name: 'Scott'};

      $http.put('/person/' + id, data)
        .then(function(response) {
          console.log(response);
          // self.people.push(response.data);
          getData();
        },
        function(response) {
          console.log('put error:', response);
        });
    }

}]);
