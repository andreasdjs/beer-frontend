angular.module('app.controllers', [])
  
.controller('topListCtrl', function($scope, dataService) {

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


})
   
.controller('availableLocallyCtrl', function($scope) {

})
   
.controller('availableOnlineCtrl', function($scope, dataService) {

	dataService.getMatchedSystembolagetBeer(function(response) {
		$scope.systembolagetMatchedBeer = response.data.systembolagetMatchedBeer;
		console.log("tock");
//		console.log($scope.ratedBeer);
	});



})
      
.controller('showItemCtrl', function($scope) {

	$scope.hello = "tjenare";



})
 