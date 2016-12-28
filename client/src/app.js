var selectPopulator = require('./views/selectPopulator.js');
// var MapWrapper = require('./views/mapWrapper.js');

var app = function() {
  selectPopulator();
};

window.onload = app;