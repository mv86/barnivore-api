var selectPopulator = require('./views/selectPopulator.js');

var app = function() {
  var optionsDiv = document.getElementById('options-div');
  var viewDrinksBtn = document.getElementById('view-drinks-btn');
  var myDrinksBtn = document.getElementById('my-drinks-btn');
  var statisticsBtn = document.getElementById('statistics-btn');

  viewDrinksBtn.onclick = function() {
    selectPopulator();
    optionsDiv.scrollIntoView();
  };

  myDrinksBtn.onclick = function() {

  };

  statisticsBtn.onclick = function() {

  };
};

window.onload = app;