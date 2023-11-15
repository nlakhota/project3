// script.js
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.935875, lng: -88.042541},
    zoom: 12
  });

  // Marker 1: Your location
  var marker1 = new google.maps.Marker({
    position: {lat: 42.01041030883789, lng: -88.07894134521484},
    map: map,
    title: 'Vascos'
  });

  // Info Window for Marker 1
  var infoWindow1 = new google.maps.InfoWindow({
    content: 'Vascos. My favorite place for fast food. Their chicken rice bowl is a must try!'
  });

  marker1.addListener('mouseover', function() {
    infoWindow1.open(map, marker1);
  });

  // Marker 2: Another location
  var marker2 = new google.maps.Marker({
    position: {lat: 41.86008834838867, lng: -88.00607299804688},
    map: map,
    title: 'Chi Tea'
  });

  // Info Window for Marker 2
  var infoWindow2 = new google.maps.InfoWindow({
    content: 'Chi Tea. My favorite chicken sandwich place!'
  });

  marker2.addListener('click', function() {
    infoWindow2.open(map, marker2);
  });

  var marker3 = new google.maps.Marker({
	  position: {lat: 42.011558532714844, lng: -87.75911712646484},
	  map: map,
	  title: 'Bonchon'
  });
  
  // Info Window for Marker 1
  var infoWindow3 = new google.maps.InfoWindow({
    content: 'Bonchon. Best place in chicago for wings!'
  });
  
  marker3.addListener('click', function() {
    infoWindow3.open(map, marker3);
  });
  
  // Polyline: Connect the two locations
  var polyline = new google.maps.Polyline({
    path: [
      {lat: 42.01041030883789, lng: -88.07894134521484},
      {lat: 41.86008834838867, lng: -88.00607299804688},
	  {lat: 42.011558532714844, lng: -87.75911712646484},
	  {lat: 42.01041030883789, lng: -88.07894134521484}  
    ],
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 1.5
  });

  polyline.setMap(map);
}
