'use strict';

angular.module('eatnbeApp')
  .factory('eventService', function ($resource) {

    return $resource('events/:eventId.json', {}, {
      query: { method: 'GET', params: {eventId: 'events'}, isArray:true }
    });

  });
