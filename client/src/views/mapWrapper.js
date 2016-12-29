var MapWrapper = function(container, coords, zoom) {
  this.markers = [];
  this.map = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
};

MapWrapper.prototype = {
  addMarker: function(coords, content) {
    var marker = new google.maps.Marker( {
      position: coords,
      map: this.map,
      animation: google.maps.Animation.DROP
    });
    var infowindow = new google.maps.InfoWindow({
      content: content
    });
    marker.addListener('click', function() {
      infowindow.open(this, marker);
    });
    this.markers.push(marker);
  },
  setMapOnAll: function(map) {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
    };
  },
  clearmarkers: function() {
    this.setMapOnAll(null);
  },
  deleteMarkers: function() {
    this.clearmarkers();
    this.markers = [];
  }
};

module.exports = MapWrapper;