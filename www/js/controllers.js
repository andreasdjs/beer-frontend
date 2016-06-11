angular.module('app.controllers', [])
  
.controller('topListCtrl', function($scope, dataService, greeting) {

	var first = this;
	first.greeting = greeting;

	console.log("first greeting: " + first.greeting.message);

	dataService.getRatedBeer(function(response) {
		$scope.ratedBeer =  response.data.ratedBeer;
		console.log("tick");
//		console.log($scope.ratedBeer);
	});


	$scope.currentItem = {
		"name" : "hello",
		"brewery" : "yello"
	};

	$scope.hello = "tjenare";

	$scope.hellothere = function(obj) {
		console.log("Hello dear!");
		first.greeting.message = "Hello dear";
		first.greeting.object = obj;
		console.log(obj);
	}
})
   
.controller('availableLocallyCtrl', function($scope, dataService) {

	dataService.getLocalBeer(function(response) {
		$scope.localBeer = response.data.availableLocalBeer;
		console.log("local tick tock");
//		console.log($scope.ratedBeer);
	});


})
   
.controller('availableOnlineCtrl', function($scope, dataService) {

	dataService.getMatchedSystembolagetBeer(function(response) {
		$scope.systembolagetMatchedBeer = response.data.systembolagetMatchedBeer;
		console.log("tock");
//		console.log($scope.ratedBeer);
	});



})
      
.controller('showItemCtrl', function($scope, greeting) {

	var second = this;
	second.greeting = greeting;

	console.log("Second greeting: " + second.greeting.message);

	$scope.hello = "tjenare";
	$scope.yello = second.greeting.message;

	$scope.beer = second.greeting.object;
	console.log($scope.beer.name);
	console.log($scope.beer.brewery);

})
 