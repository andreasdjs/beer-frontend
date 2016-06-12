angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('dataService', function($http){

  this.getLocalBeer = function(cb) {
    $http.get('http://localhost\:3000/api/ratedMatchedBeerLocalStore').then(cb);
  };

/* duplicate
  this.getMatchedSystembolagetBeer = function(cb) {
    $http.get('http://localhost\:3000/api/systembolagetMatchedBeer').then(cb);
  };
*/

  this.getMatchedSystembolagetBeer = function(cb) {
    $http.get('http://localhost\:3000/api/systembolagetMatchedBeer').then(cb);
  };


  this.getRatedBeer = function(cb) {
    $http.get('http://localhost\:3000/api/ratedBeer').then(cb);
  };

})

.service('sharedData', function SharedData(){

	var sharedData = this;
//	sharedData.message = "Default";

});


/*
.service('dataService', [function($http){
  this.getRatedBeer = function(cb) {
    $http.get('http://localhost\:3000/api/ratedBeer').then(cb);
  };
}]);
*/

