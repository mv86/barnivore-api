var ajaxHelper = require('./helper/ajaxHelper.js');
var countrySelect = require('./views/countrySelect.js');

var app = function() {
  countrySelect.populateCountrySelect();
  countrySelector = document.getElementById('country-select');
  brewerySelector = document.getElementById('brewery-select');
  alcoholTypeSelect = document.getElementById('type-select');
  alcoholTypeSelect.onchange = function() {
    countrySelector.style.visibility = 'hidden';
    brewerySelector.style.visibility = 'hidden';
    waitOption = document.getElementById('wait');
    if (alcoholTypeSelect.value !== 'select') {
      waitOption.hidden = false;
      ajaxHelper.makeGetRequest(alcoholTypeSelect.value, apiInfo)
      alcoholTypeSelect.options.selectedIndex = 4;
    };
  };
  apiInfo = function(apiData) {
    alcoholTypeSelect.options.selectedIndex = 0;
    waitOption.hidden = true;
    countrySelector.options.selectedIndex = 0;
    breweries = JSON.parse(apiData)
    countrySelector.style.visibility = 'visible';
    countrySelector.onchange = function() {
      selectedCountryBreweries = [];
      for (brewery of breweries) {
        if (this.value === brewery.company.country) {
          selectedCountryBreweries.push(brewery);
        }
      }
      populateBrewerySelect(selectedCountryBreweries);
    }
  };
  populateBrewerySelect = function(breweries) {
    brewerySelector.style.visibility = 'visible';
    brewerySelector.options.length = 1;
    if (breweries.length < 1) {
      brewerySelector.options[0].innerText = 
      "Sorry None found" ;
    } else {
      for (brewery of selectedCountryBreweries) {
        brewerySelector.options[0].innerText = 
        "Select Brewery" ;
        option = document.createElement('option');
        option.innerText = brewery.company.company_name;
        brewerySelector.appendChild(option);
      }
    }
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