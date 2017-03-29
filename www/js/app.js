// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ionic-material','jett.ionic.filter.bar','ionMdInput'])



.run(function($ionicPlatform ,$rootScope, $state ,$ionicPopup,$ionicHistory) {
  $ionicPlatform.registerBackButtonAction(function(e) {
 e.preventDefault();
 function showConfirm() {
  var confirmPopup = $ionicPopup.show({
   title : 'Exit TravelWithMe?',
   template : 'Are you sure you want to exit TravelWithMe?',
   buttons : [{
    text : 'Cancel',
    type : 'button-royal button-outline',
   }, {
    text : 'Ok',
    type : 'button-royal',
    onTap : function() {
     ionic.Platform.exitApp();
    }
   }]
  });
 };

 // Is there a page to go back to?
 if ($ionicHistory.backView()) {
  // Go back in history
  $ionicHistory.backView().go();
 } else {
  // This is the last page: Show confirmation popup
  showConfirm();
 }

 return false;
}, 101);
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  $ionicConfigProvider.backButton.previousTitleText(false);
  $ionicConfigProvider.views.maxCache(0);
  $ionicConfigProvider.tabs.position('top');
  $stateProvider

  .state('login',{
    url:'/login',
    templateUrl:'templates/login.html',
    controller:'LoginCtrl'
  })

  .state("signup",{
    url:'/signup',
    templateUrl:'templates/signup.html',
    controller:'SignupCtrl'
  })

    .state("vertify",{
    url:'/vertify',
    templateUrl:'templates/vertify.html',
    controller:'VertifyCtrl'
  })


  .state('app',{
    url:'/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'MainCtrl',
  })

  .state('app.tabs',{
    url:'/tabs',
    abstract: true,
    views:{
      'menuContent':{
          templateUrl: 'templates/tab.html',
          controller: 'TabCtrl',
      }
    }

  })


  .state('app.tabs.all',{
    url: '/all',
        views: {
            'menuContent': {
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            }

          }
        })
  
  .state('app.tabs.article',{
    url: '/article',
        views: {
            'menuContent': {
                templateUrl: 'templates/article.html',
                controller: 'ArticleCtrl'
            },
            'fabContent':{
              template: '<button id="fab-activity" ng-click="modal.show()" class="button button-fab button-fab-bottom-right expanded button-energized-900 flap"><i class="icon ion-navicon"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 200);
                }            
            }
          }
        })

  .state('app.tabs.travels',{
    url: '/travels',
        views: {
            'menuContent': {
                templateUrl: 'templates/travels.html',
                controller: 'TravelsCtrl'
            },
            'fabContent':{
              template: '<button id="fab-activity" ng-click="modal.show()" class="button button-fab button-fab-bottom-right expanded button-energized-900 flap"><i class="icon ion-navicon"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 200);
                }            
            }
          }
        })
  .state('app.trip', {
    url: '/trip',
        views: {
            'menuContent': {
                templateUrl: 'templates/trip.html',
                controller: 'TripCtrl'
            },
          }
        })

  .state('app.profile', {
    url: '/profile',
        views: {
            'menuContent': {
                templateUrl: 'templates/profile.html',
                controller: 'ProfileCtrl'
            },
            'fabContent':{
              template: '<button id="fab-activity" class="button button-fab button-fab-bottom-right expanded button-calm-900 flap"><i class="icon ion-edit"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 200);
                }            
            }
          }
        })

  .state('app.map',{
    url:'/map',
    views: {
      'menuContent':{
        templateUrl:'templates/map.html',
        controller:'MapCtrl'
      },
      'fabContent':{
        template: '<button id="fab-activity" class="button button-fab button-fab-bottom-left expanded button-positive-900 flap"><i class="icon ion-compass"></i></button>',
          controller: function ($timeout) {
              $timeout(function () {
                  document.getElementById('fab-activity').classList.toggle('on');
              }, 200);
          }            
      }

    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
