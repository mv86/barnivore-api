var eHelper = require('../helper/elementHelper.js');

var populateCountrySelect = function(companies) {
  var countrySelector = document.getElementById('country-select');
  var countries = [];

  for (var company of companies) {
    if (company.company.country !== "") {
      countries.push(company.company.country);
    };
  };

  var compare = function (a, b) {
   if (a < b)
     return -1;
   if (a > b)
     return 1;
   return 0;
  }
  countries.sort(compare)

  var filteredCountries = countries.filter( function(item, index, inputArray) {
  return inputArray.indexOf(item) == index;
  });

  for (country of filteredCountries) {
    option = eHelper.createElement('option', country)
    countrySelector.appendChild(option);
  };
};

module.exports = populateCountrySelect;