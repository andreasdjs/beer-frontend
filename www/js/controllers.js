angular.module('app.controllers', [])
  
.controller('topListCtrl', function($scope, dataService, sharedData) {

	var toplist = this;
	toplist.sharedData = sharedData;

	dataService.getRatedBeer(function(response) {
		$scope.ratedBeer =  response.data.ratedBeer;
	});

	$scope.showBeer = function(obj) {
		toplist.sharedData.object = obj;
//		console.log(obj);
	}
})
   
.controller('availableLocallyCtrl', function($scope, dataService, sharedData) {

	var local = this;
	local.sharedData = sharedData;

	dataService.getLocalBeer(function(response) {
		$scope.localBeer = response.data.availableLocalBeer;
	});

	$scope.showBeer = function(obj) {
		local.sharedData.object = obj;
//		console.log(obj);
	}

})
   
.controller('availableOnlineCtrl', function($scope, dataService, sharedData) {

	var online = this;
	online.sharedData = sharedData;

	dataService.getMatchedSystembolagetBeer(function(response) {
		$scope.systembolagetMatchedBeer = response.data.systembolagetMatchedBeer;
	});

	$scope.showBeer = function(obj) {
		online.sharedData.object = obj;
//		console.log(obj);
	}

})
      
.controller('showItemCtrl', function($scope, sharedData) {

	var showItem = this;
	showItem.sharedData = sharedData;

	$scope.beer = showItem.sharedData.object;

/* stars */

	$scope.stars = Math.floor($scope.beer.rating);
	$scope.remaining = $scope.beer.rating - $scope.stars;
	$scope.half = 0;
	$scope.quarter = 0;
	$scope.threeQuarter = 0;

	if ($scope.remaining == 0.5) {
		$scope.half = 1;
	}
	if ($scope.remaining == 0.25) {
		$scope.quarter = 1;
	}
	if ($scope.remaining == 0.75) {
		$scope.threeQuarter = 1;
	}

	$scope.unlit = 5 - Math.ceil($scope.beer.rating);
//	console.log("Unlit: " + $scope.unlit)
//	console.log($scope.remaining);
	$scope.getNumber = function(num) {
	    return new Array(num);   
	}

/* end stars */


})



 