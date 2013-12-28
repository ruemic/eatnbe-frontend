

// Use history.js to persist Host/Guest toggle state
History.Adapter.bind(window,'statechange',function(){
  if ( History.getState().title == "Host"  ) {
    $('body').addClass('hosting');
  }
  else if ( History.getState().title == "Guest"  ) {
    $('body').removeClass('hosting');
  }
});

$( document ).ready(function() {
  if ( History.getState().title == "Host" ) {
    $('#chkbx').prop('checked', false);
    $('body').addClass('hosting');

  } else {
    $('#chkbx').prop('checked', true);
  }
});

$("#chkbx").on("click", function() {
  if ($(this).is(":checked") ) {
    History.pushState({}, "Guest", "?guest");
  } else {
    History.pushState({}, "Host", "?host");
  }
});




// Facebook button

(function() {
  var fbshares, fbsite;

  fbsite = "EatnBe";

  $.getJSON("http://graph.facebook.com/" + fbsite + "?callback=?", function(json) {
    return $(".likes").append(json.likes);
  });

  fbshares = "http://www.eatnbe.co/teaser-eatnbe/";

  $.getJSON("http://graph.facebook.com/" + fbshares + "?callback=?", function(json) {
    return $(".shares").append(json.shares || 0 );
  });

}).call(this);



