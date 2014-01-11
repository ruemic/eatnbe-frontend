'use strict';

angular.module('eatnbeApp', [
  'ngResource',
  'ngRoute',
  'ui.router'

])
  .config(function ($stateProvider, $urlRouterProvider) {

    // Default to index state
  $urlRouterProvider.otherwise("index");

  // Define routes
  $stateProvider
    .state('index', {
      url: "/index",
      templateUrl: "views/main.html",
      controller: 'MainCtrl'
    })

    .state('results', {
      url: "/results",
      templateUrl: "views/results.html",
      controller: 'ResultsCtrl'
    })
    .state('results.more', {
      url: "/results-more",
      templateUrl: "views/results.more.html"
    })
  });
