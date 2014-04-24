'use strict';

var app = angular
  .module('listrApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router'

  ]);
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider

      .state('home', {
        url: '/home',
        templateUrl: 'views/main.html'
      });
  });
