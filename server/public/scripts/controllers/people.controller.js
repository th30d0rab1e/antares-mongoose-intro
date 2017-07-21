myApp.controller('PeopleController', ['$http', function($http) {
    var vm = this;
    vm.newPerson = {};

    // get the people data from the server and fill the DOM
    getPeople();

    vm.addPerson = function() {
      console.log('add person', vm.newPerson);
      vm.newPerson.internetPoints = 1000;
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

    vm.addPoints = function(id, points){
      console.log('going to add 100 points');
      points += 100;
      var internetPoints = {internetPoints: points};
      $http.put('/person/addPoints/' + id, internetPoints)
        .then(function(response){
          getPeople();
        });
    }

    vm.deletePerson = function(id) {
      console.log('delete person with id: ', id);
      $http.delete('/person/' + id)
        .then(function(response) {
          getPeople();
        });
    }

    function getPeople() {
      $http.get('/person').then(function(response) {
        console.log(response.data);
        vm.people = response.data;
      });
    }



}]);
