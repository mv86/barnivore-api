var selectPopulator = require('./views/selectPopulator.js');

var app = function() {
  selectPopulator.populateCountrySelect();
  selectPopulator.setupApiRequest();
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