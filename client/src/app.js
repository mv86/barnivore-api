var selectPopulator = require('./views/selectPopulator.js');

var app = function() {
  var viewDrinksBtn = document.getElementById('view-drinks-btn');
  var myDrinksBtn = document.getElementById('my-drinks-btn');
  var statisticsBtn = document.getElementById('statistics-btn');

  viewDrinksBtn.onclick = function() {
    selectPopulator();
  };

  myDrinksBtn.onclick = function() {

  };

  statisticsBtn.onclick = function() {

  };
};

window.onload = app;