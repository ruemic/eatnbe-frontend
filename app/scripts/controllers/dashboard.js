'use strict';

angular.module('eatnbeApp')
  .controller('DashboardCtrl', function ($scope) {

    $scope.showMore = function(obj, $event) {
      $(event.target).next('.more').fadeToggle();

    }

    $scope.messageModal = function() {
      $('#send-a-message').foundation('reveal', 'open');
    };

    $scope.closeModal = function() {
      $('#send-a-message').foundation('reveal', 'close');
    };

  });
