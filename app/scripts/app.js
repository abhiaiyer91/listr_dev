'use strict';

var app = angular
  .module('listrApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'google-maps'

  ]);
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider

      .state('home', {
        url: '/home',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })

      .state('/membership', {
        url: '/membership',
        templateUrl: 'views/membership.html',
        controller: 'SignUpForm'
      })

      .state('/admin', {
        url: '/admin',
        templateUrl: 'views/admin-orders.html',
        controller: 'SignUpForm'
      })
});
 