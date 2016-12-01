myApp.controller('PeopleController', ['$http', function($http) {
    var self = this;
    self.people = [];
    self.newPerson = {};

    function getData() {
      $http.get('/person')
        .then(function(response) {
          console.log(response);
          self.people = response.data;
        },
        function(response) {
          console.log('error: ', response);
        });
    }

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


    getData();

}]);
