var AjaxHelper = require('./helper/ajaxHelper.js');

var app = function() {
  alcoholTypeSelect = document.getElementById('type-select');
  console.log(alcoholTypeSelect)
  alcoholTypeSelect.onchange = function() {
    if (alcoholTypeSelect.value !== 'select') {
    AjaxHelper.makeGetRequest(alcoholTypeSelect.value, populateCountrySelect)
    };
  };
};

var populateCountrySelect = function(apiData) {
  breweries = JSON.parse(apiData)
  // console.log(breweries[21].company.country)
  // function compare(a,b) {
  //   console.log('i am being called')
  //   if (a.company.country < b.company.country)
  //     return -1;
  //   if (a.company.country > b.company.country)
  //     return 1;
  //   return 0;
  // }
  // breweries.sort(compare)
  // countrySelect = document.getElementById('country-select');
  breweryCountries = []
  for (brewery of breweries) {
    breweryCountries.push(brewery.company.country)
  }
}

window.onload = app;