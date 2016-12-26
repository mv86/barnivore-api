var ajaxHelper = require('./helper/ajaxHelper.js');
var countrySelect = require('./views/countrySelect.js');

var app = function() {
  countrySelect.populateCountrySelect();
    alcoholTypeSelect = document.getElementById('type-select');
    alcoholTypeSelect.onchange = function() {
      console.log('calling')
      if (alcoholTypeSelect.value !== 'select') {
        ajaxHelper.makeGetRequest(alcoholTypeSelect.value, apiInfo)
      };
    };
  apiInfo = function(apiData) {
    breweries = JSON.parse(apiData)
    console.log(breweries)
  }
}

window.onload = app;


//  function compare(a, b) {
//    if (a < b)
//      return -1;
//    if (a > b)
//      return 1;
//    return 0;
//  }
//  breweryCountries.sort(compare)
//  filteredArray = breweryCountries.filter( function( item, index, inputArray ) {
//   return inputArray.indexOf(item) == index;
// });