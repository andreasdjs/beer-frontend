angular.module('app.controllers', [])
  
.controller('topListCtrl', function($scope, dataService, sharedData) {

	var toplist = this;
	toplist.sharedData = sharedData;

	dataService.getRatedBeer(function(response) {
		$scope.ratedBeer =  response.data.ratedBeer;
	});

	$scope.showBeer = function(obj) {
		toplist.sharedData.object = obj;
		console.log(obj);
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
		console.log(obj);
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
		console.log(obj);
	}

})
      
.controller('showItemCtrl', function($scope, sharedData) {

	var second = this;
	second.sharedData = sharedData;

	$scope.beer = second.sharedData.object;

})
 