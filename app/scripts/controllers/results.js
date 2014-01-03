'use strict';

angular.module('eatnbeApp')
  .controller('ResultsCtrl', function ($scope, eventService) {

    $scope.events = eventService.query();

  });
