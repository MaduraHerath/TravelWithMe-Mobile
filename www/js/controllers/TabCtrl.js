angular.module("starter")
.controller('TabCtrl',function($state, $scope, $ionicTabsDelegate){

	  	  	$scope.gotoall = function(){
    	$state.go('app.tabs.all');
  	}

  	$scope.gotoarticle = function(){
    	$state.go('app.tabs.article');
  	}

$scope.gototravels = function(){
    	$state.go('app.tabs.travels');
  	}

})