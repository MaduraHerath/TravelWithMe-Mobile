angular.module("starter")
.controller('MapCtrl',function($state, $scope,$ionicLoading){

    google.maps.event.addDomListener(window, 'load', function() {
        var myLatlng = new google.maps.LatLng(6.8614355, 79.8805176);
 
        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };/*
  map.on(plugin.google.maps.event.MAP_READY, onMapInit);*/
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location"
            });
        });
 
        $scope.map = map;
    });



$scope.$on('$ionicView.enter', function(){
  window.location.reload(true);
});
 
});
