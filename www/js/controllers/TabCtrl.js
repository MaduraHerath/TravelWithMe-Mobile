angular.module("starter")
.controller('TabCtrl',function($state, $scope, $ionicPopup){

	  	  	$scope.gotohome = function(){
    	$state.go('app.tabs.all');
  	}

  	$scope.gotoarticle = function(){
    	$state.go('app.tabs.article');
  	}



  	  	$scope.gotohome = function(){
    	$state.go('app.tabs.all');
  	}

})