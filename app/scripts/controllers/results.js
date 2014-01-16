// We use jquery.debounce to prevent overloading the UI with updates from filtering

/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);


'use strict';


angular.module('eatnbeApp', ['ngResource'])


  // This factory creates a service that use ngResource to fetch the results data
  .factory('eventService', function ($resource) {

    return $resource('events/:eventId.json', {}, {
      query: { method: 'GET', params: {eventId: 'events-nice'}, isArray:true }
    });

  })



  // this controller updates the UI
  .controller('ResultsCtrl', function ($scope, $location, eventService) {

    // loads the events
    $scope.events = eventService.query();
    $scope.maxPrice = 30;


    // creates the filter by max price that's used in the ng-repeat directive
    $scope.priceFilter = function(event) {
      if (event.price <= $scope.maxPrice) {
        return event;
      }
    };


    // A map marker creator to keep things DRY
    var createMarker = function(event) {
      eventsMap.addMarker({
        lat: event.lat,
        lng: event.lng,
        title: event.name,
        infoWindow: {
        content: '<a href="'+event.url+'"class="map-tip"><img class="text-center" src="' + event.image + '" alt=""><h6>'+ event.name + '</h6><span class="price">$'+event.price+'</span> <span class="right">'+event.noOfSeatsAvailable+' tickets left</span></a>'
        }
      });
    };


    // Wait for results to load from server, then create & populate the map with data
    $scope.events.$promise.then( function (events) {

      // draw a GMap
      eventsMap = new GMaps({
        lat: 37.7594,
        lng: -122.4406,
        div: '#map_canvas',
        zoom: 12
      });

      events.forEach( function(event) {
        createMarker(event);
      });

    });


    // Update the markers whenever a change in the filter input values occur, we use debounce to keep the UI changes under control
    $scope.change = $.debounce( 300, function() {
      eventsMap.removeMarkers();

      $scope.filteredEvents.forEach( function(event) {
        createMarker(event);
      });

    });

  })



