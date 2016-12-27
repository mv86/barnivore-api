var selectPopulator = require('./views/selectPopulator.js');

var app = function() {
  // selectPopulator.populateCountrySelect();
  selectPopulator();
}

window.onload = app;