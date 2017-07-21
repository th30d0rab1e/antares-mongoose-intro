myApp.controller('PeopleController', ['$http', function($http) {
    var vm = this;
    vm.newPerson = {};

    getPeople();

    vm.addPerson = function() {
      console.log('add person', vm.newPerson);
      $http.post('/person', vm.newPerson)
        .then(function(response) {
          console.log('added person', response);
          getPeople();
        });
    }

    vm.updatePerson = function(id) {
      console.log('update person with id: ', id);
      var data = {location: 'Idaho'};
      $http.put('/person/' + id, data)
        .then(function(response) {
          getPeople();
        });
    }

    vm.deletePerson = function(id) {
      console.log('delete person with id: ', id);
      $http.delete('/person/' + id)
        .then(function(response) {
          getPeople();
        })
    }

    function getPeople() {
      $http.get('/person').then(function(response) {
        console.log(response.data);
        vm.people = response.data;
      });
    }

}]);
