// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('ecoop', ['ionic', 'ionicUIRouter', 'ion-autocomplete'])

.run(function($ionicPlatform) {
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

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/root.html',
      controller: 'RootController'
    })

    .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'templates/views/login.html',
          controller: 'LoginController'
        }
      }
    })

    .state('app.tab', {
      url: '/tab',
      abstract: true,
      views: {
        'menuContent': {
          templateUrl: 'templates/views/tabs.html',
          controller: 'TabsController'
        }
      }
    })


    //calculator tab
    .state('app.tab.calculator', {
      url: '/calculator',
      views: {
        'tab-calculator': {
          templateUrl: 'templates/views/calculator.html',
          controller: 'CalculatorController'
        }
      }
    })
    .state('app.tab.offer', {
      url: '/offer/:customerType',
      views: {
        'tab-calculator': {
          templateUrl: 'templates/views/offer.html',
          controller: 'OfferController'
        }
      }
    })


    //contract tab
    .state('app.tab.contract', {
      url: '/contract',
      views:{
        'tab-calculator': {
          templateUrl: 'templates/views/contract.html',
          controller: 'ContractController'
        },
        'tab-contract': {
          templateUrl: 'templates/views/contract.html',
          controller: 'ContractController'
        }
      }
    })
    .state('app.tab.delivery', {
      url: '/delivery',
      views: {
        'tab-contract': {
          templateUrl: 'templates/views/delivery.html',
          controller: 'DeliveryController'
        }
      }
    })



    //search tab
    // .state('app.tab.search', {
    //   url: '/search',
    //   views: {
    //     'tab-search': {
    //       templateUrl: 'templates/views/search.html',
    //       controller: 'SearchController'
    //     }
    //   }
    // })

    

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
