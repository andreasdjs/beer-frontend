angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('dataService', function($http){

/* Get rated beer */
//http://localhost\:3000/api/:id
//http://localhost\:3000/api/ratedBeer

//ratedMatchedBeerLocalStore

  this.getLocalBeer = function(cb) {
    $http.get('http://localhost\:3000/api/ratedMatchedBeerLocalStore').then(cb);
  };


  this.getMatchedSystembolagetBeer = function(cb) {
    $http.get('http://localhost\:3000/api/systembolagetMatchedBeer').then(cb);
  };


  this.getMatchedSystembolagetBeer = function(cb) {
    $http.get('http://localhost\:3000/api/systembolagetMatchedBeer').then(cb);
  };


  this.getRatedBeer = function(cb) {
    $http.get('http://localhost\:3000/api/ratedBeer').then(cb);
  };

})

.service('greeting', function Greeting(){
	var greeting = this;

	greeting.message = "Default";
	/*
  this.getRatedBeer = function(cb) {
    $http.get('http://localhost\:3000/api/ratedBeer').then(cb);
  };*/

});


/*
.service('dataService', [function($http){


  this.getRatedBeer = function(cb) {
    $http.get('http://localhost\:3000/api/ratedBeer').then(cb);
  };
/*

}]);

*/
