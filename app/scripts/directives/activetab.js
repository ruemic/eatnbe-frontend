'use strict';

angular.module('eatnbeApp')
  .directive('activeTab', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the activeTab directive');
      }
    };
  });
