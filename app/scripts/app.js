'use strict';

var app = angular
  .module('listrApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ngRoute',
    'google-maps',
    'firebase'

  ]);
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider

      .state('home', {
        url: '/home',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('register', {
        url: '/signup',
        templateUrl: 'views/signup.html',
        controller: 'AuthCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl'
      })
      .state('membership', {
        url: '/membership',
        templateUrl: 'views/membership.html',
        controller: 'DataCtrl'
      })
      .state('buynow', {
        url: '/buynow',
        templateUrl: 'views/store.html',
        controller: 'StoreCtrl'
      })      
      .state('products', {
        url: '/products/:productSku',
        templateUrl: 'views/product.html',
        controller: 'StoreCtrl'
      })

      .state('cart', {
        url: '/cart',
        templateUrl:'views/shoppingCart.html',
        controller: 'StoreCtrl'
      })

});

app.constant('FIREBASE_URL', 'https://listr-fire.firebaseio.com/')
 