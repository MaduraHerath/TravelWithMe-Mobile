angular.module("starter")
.controller('PopCtrl',function($state, $scope, $ionicPopup){
		$scope.showPopup = function() {
  $scope.data = {};
  $ionicPopup.show({
    template: '<input type="username">',
    title: 'Enter Username',
    subTitle: 'Please Enter Username',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Save</b>',
        type: 'button-positive',
        onTap: function(e) {
          // add your action
        }
      }
    ]
	});
    }


});