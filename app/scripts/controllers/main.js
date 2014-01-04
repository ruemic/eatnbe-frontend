'use strict';

angular.module('eatnbeApp')
  .controller('MainCtrl', function ($scope) {

  $('chkbx').attr("checked");

  $scope.toggleHostView = function() {
    $('#how-it-works').toggleClass('hosting');
  };


  // Facebook button

  var fbshares, fbsite;

  fbsite = "EatnBe";

  $.getJSON("http://graph.facebook.com/" + fbsite + "?callback=?", function(json) {
    return $(".likes").append(json.likes);
  });

  fbshares = "http://www.eatnbe.co/teaser-eatnbe/";

  $.getJSON("http://graph.facebook.com/" + fbshares + "?callback=?", function(json) {
    return $(".shares").append(json.shares || 0 );
  });

});
