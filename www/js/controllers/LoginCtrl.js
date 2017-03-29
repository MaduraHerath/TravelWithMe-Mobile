angular.module("starter")
.controller('LoginCtrl',function($state, $scope, $ionicPopup){
  	$scope.gotoSignup = function(){
    	$state.go('signup');
  	}

})