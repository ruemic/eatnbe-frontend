'use strict';

angular.module('eatnbeApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
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

      .state('dashboard', {
        url: "/dashboard",
        templateUrl: "views/dashboard.html",
        controller: 'DashboardCtrl'
      })
      .state('dashboard.profile', {
        url: "/profile",
        templateUrl: "views/dashboard.profile.html"
      })
      .state('dashboard.events', {
        url: "/events",
        templateUrl: "views/dashboard.events.html"
      })
      .state('dashboard.inbox', {
        url: "/inbox",
        templateUrl: "views/dashboard.inbox.html"
      })
     .state('dashboard.billing', {
        url: "/billing",
        templateUrl: "views/dashboard.billing.html"
      })
  });
