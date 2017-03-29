angular.module("starter")
.controller('SignupCtrl',function($state, $scope, $ionicPopup,ionicMaterialInk){
    ionicMaterialInk.displayEffect();
  	$scope.gotoVertify = function(){
    	$state.go('vertify');
  	}
})