function CreateEventCtrl($scope) {

  var mapOptions = {
    center: new google.maps.LatLng(37.7833, -122.4167),
    zoom: 13
  };
  var map = new google.maps.Map(document.getElementById('map_canvas'),
    mapOptions);

  var input = /** @type {HTMLInputElement} */(
      document.getElementById('address-input'));


  var types = document.getElementById('type-selector');
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(types);


  // set auto-complete bias for San Francisco
  var defaultBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(37.7833, -122.4167),
    new google.maps.LatLng(37.7833, -122.4167));

  var options = {
    bounds: defaultBounds
  }
  var autocomplete = new google.maps.places.Autocomplete(input, options);
  autocomplete.bindTo('bounds', map);

  var marker = new google.maps.Marker({
    map: map
  });

  google.maps.event.addListener(autocomplete, 'place_changed', function() {

    marker.setVisible(false);
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      return;
    }



    // marker.setIcon(/** @type {google.maps.Icon} */({
    //   url: place.icon,
    //   size: new google.maps.Size(71, 71),
    //   origin: new google.maps.Point(0, 0),
    //   scaledSize: new google.maps.Size(25, 25)
    // }));

    marker.setPosition(place.geometry.location);
    marker.setVisible(true);

    $("#event-address").html(place.formatted_address);
    $("#gps-coordinates").val(place.geometry.location);
    $("#new-address-radio").attr('checked', 'checked');

    // map.setZoom(16);
    map.panTo(place.geometry.location);

  });

}


