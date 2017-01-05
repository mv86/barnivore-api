var MapWrapper = require('../views/mapWrapper.js');

var populateMap = function(companies) {
  var map = document.getElementById('map-div');
  map.style.visibility = 'visible';
  var geo = new google.maps.Geocoder();
  var country = companies[0].company.country;
  var infoWindow = "There are " + companies.length + " companies selling this alcohol type in " + country + "!"

  geo.geocode({'address': country}, function (results) {
    var locationLat = results[0].geometry.location.lat();
    var locationLng = results[0].geometry.location.lng();
    var countryLocation = {lat: locationLat, lng: locationLng};
    var mainMap = new MapWrapper(map, countryLocation, 6);
    mainMap.addMarker(countryLocation, infoWindow);
  });
  
};

module.exports = populateMap;