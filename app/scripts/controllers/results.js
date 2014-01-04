'use strict';

angular.module('eatnbeApp')
  .controller('ResultsCtrl', function ($scope, eventService) {

    $scope.events = eventService.query();

    var map = new GMaps({
      lat: 36.9575335,
      lng: -122.0400129,
      div: '#map_canvas'
    });

    map.drawOverlay({
      lat: 36.9575335,
      lng: -122.0400129,
      content: '<div class="current-location"><i class="fa fa-user"></i></div>'
    });

    map.addMarker({
      lat: 36.9575335 + .003,
      lng: -122.0400129 + .006,
      title: 'Fried Chilly Squid',
      details: { price: 22 },
      infoWindow: {
      content: '<div class="map-tip"><h4 class="text-center">Fried Chilly Squid</h4><img class="text-center" src="http://placehold.it/500x312" class="expand" alt=""></div>'
      }
    });
    map.addMarker({
      lat: 36.9575335 - .001,
      lng: -122.0400129 - .006,
      title: 'Fried Chilly Squid',
      details: { price: 22 },
      infoWindow: {
      content: '<div class="map-tip"><h4 class="text-center">Fried Chilly Squid</h4><img class="text-center" src="http://placehold.it/500x312" class="expand" alt=""></div>'
      }
    });

  });
