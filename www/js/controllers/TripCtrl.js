angular.module("starter")
.controller('TripCtrl',function($state, $scope, $ionicModal,ionicMaterialInk){
 $scope.events = ["Culture","Outdoors","Relaxing","Romantic","Kids Friendly","Beaches","Historic sites","Museums","Shopping","Hiking"];
      $scope.selected = [];

      $scope.toggle = function (events, list) {
        var idx = list.indexOf(events);
        if (idx > -1) {
          list.splice(idx, 1);
        }
        else {
          list.push(events);
        }
      };

      $scope.exists = function (events, list) {
        return list.indexOf(events) > -1;
      };
ionicMaterialInk.displayEffect();
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

(function () {
  'use strict';

  // If we do not have CryptoJS defined; import it
  if (typeof CryptoJS == 'undefined') {
    var cryptoSrc = '//cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/md5.js';
    var scriptTag = document.createElement('script');
    scriptTag.setAttribute('src', cryptoSrc);
    document.body.appendChild(scriptTag);
  }

  angular
      .module('contactChipsDemo', ['ngMaterial'])
      .controller('ContactChipDemoCtrl', DemoCtrl);

  function DemoCtrl ($q, $timeout) {
    var self = this;
    var pendingSearch, cancelSearch = angular.noop;
    var lastSearch;

    self.allContacts = loadContacts();
    self.contacts = [self.allContacts[0]];
    self.asyncContacts = [];
    self.filterSelected = true;

    self.querySearch = querySearch;
    self.delayedQuerySearch = delayedQuerySearch;

    /**
     * Search for contacts; use a random delay to simulate a remote call
     */
    function querySearch (criteria) {
      return criteria ? self.allContacts.filter(createFilterFor(criteria)) : [];
    }

    /**
     * Async search for contacts
     * Also debounce the queries; since the md-contact-chips does not support this
     */
    function delayedQuerySearch(criteria) {
      if ( !pendingSearch || !debounceSearch() )  {
        cancelSearch();

        return pendingSearch = $q(function(resolve, reject) {
          // Simulate async search... (after debouncing)
          cancelSearch = reject;
          $timeout(function() {

            resolve( self.querySearch(criteria) );

            refreshDebounce();
          }, Math.random() * 500, true)
        });
      }

      return pendingSearch;
    }

    function refreshDebounce() {
      lastSearch = 0;
      pendingSearch = null;
      cancelSearch = angular.noop;
    }

    /**
     * Debounce if querying faster than 300ms
     */
    function debounceSearch() {
      var now = new Date().getMilliseconds();
      lastSearch = lastSearch || now;

      return ((now - lastSearch) < 300);
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(contact) {
        return (contact._lowername.indexOf(lowercaseQuery) != -1);
      };

    }



  }

})();

});