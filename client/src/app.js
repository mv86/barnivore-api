var ajaxHelper = require('./helper/ajaxHelper.js');
var countrySelect = require('./views/countrySelect.js');

var app = function() {
  countrySelect.populateCountrySelect();
  var countrySelector = document.getElementById('country-select');
  var brewerySelector = document.getElementById('brewery-select');
  var alcoholTypeSelect = document.getElementById('type-select');
  var waitOption = document.getElementById('wait');
  alcoholTypeSelect.onchange = function() {
    countrySelector.style.visibility = 'hidden';
    brewerySelector.style.visibility = 'hidden';
    if (alcoholTypeSelect.value !== 'select') {
      waitOption.hidden = false;
      ajaxHelper.makeGetRequest(alcoholTypeSelect.value, apiInfo)
      alcoholTypeSelect.options.selectedIndex = 4;
      waitOption.hidden = true;
    };
  };
  apiInfo = function(apiData) {
    alcoholTypeSelect.options.selectedIndex = 0;
    countrySelector.options.selectedIndex = 0;
    var breweries = JSON.parse(apiData)
    countrySelector.style.visibility = 'visible';
    countrySelector.onchange = function() {
      var selectedCountryBreweries = [];
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
    console.log(breweries)
    brewerySelector.options.length = 1;
    if (breweries.length < 1) {
      brewerySelector.options[0].innerText = 
      "None Found" ;
    } else {
      brewerySelector.options[0].innerText = 
      "Select Brewery" ;
      for (brewery of breweries) {
        option = document.createElement('option');
        option.innerText = brewery.company.company_name;
        brewerySelector.appendChild(option);
      }
    }
    brewerySelector.onchange = function() {
      for (brewery of breweries) {
        if (this.value === brewery.company.company_name) {
          ul = document.getElementById('brewery-display')
          ul.innerHTML = '';
          liName = document.createElement('li')
          liName.innerText = brewery.company.company_name;
          ul.appendChild(liName);
        }
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