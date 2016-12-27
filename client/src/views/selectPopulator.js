var ajaxHelper = require('../helper/ajaxHelper.js');

var setupApiRequests = function() {
  var countrySelector = document.getElementById('country-select');
  var companySelector = document.getElementById('company-select');
  var alcoholTypeSelect = document.getElementById('type-select');
  var waitOption = document.getElementById('wait');

  alcoholTypeSelect.onchange = function() {
    countrySelector.style.visibility = 'hidden';
    companySelector.style.visibility = 'hidden';
    if (alcoholTypeSelect.value !== 'select') {
      waitOption.hidden = false;
      ajaxHelper.makeGetRequest(alcoholTypeSelect.value, apiInfo)
      alcoholTypeSelect.options.selectedIndex = 4;
      waitOption.hidden = true;
    };
  };
  var apiInfo = function(apiData) {
    var companies = JSON.parse(apiData)
    populateCountrySelect(companies);
    alcoholTypeSelect.options.selectedIndex = 0;
    countrySelector.options.selectedIndex = 0;
    countrySelector.style.visibility = 'visible';
    countrySelector.onchange = function() {
      var selectedCountryCompanies = [];
      for (company of companies) {
        if (this.value === company.company.country) {
          selectedCountryCompanies.push(company);
        };
      };
      populateCompanySelect(selectedCountryCompanies);
    };
  };
  var populateCountrySelect = function(companies) {
    var countries = [];
    for (company of companies) {
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

   var filteredCountries = countries.filter( function( item, index, inputArray ) {
    return inputArray.indexOf(item) == index;
  });

   for (country of filteredCountries) {
    option = document.createElement('option')
    option.innerText = country;
    countrySelector.appendChild(option);
  };
};
var populateCompanySelect = function(companies) {
  companySelector.style.visibility = 'visible';
  ul = document.getElementById('company-display')
  companySelector.options.length = 1;
  ul.innerHTML = '';

  for (company of companies) {
    option = document.createElement('option');
    option.innerText = company.company.company_name;
    companySelector.appendChild(option);
  }
  
  companySelector.onchange = function() {
    for (company of companies) {
      if (this.value === company.company.company_name) {
        ul.innerHTML = '';
        liName = document.createElement('li')
        liName.innerText = company.company.company_name;
        ul.appendChild(liName);
      }
    }
  }
};
};

module.exports = setupApiRequests;

// countries: ["Argentina", "Australia", "Austria",
// "Barbados", "Belgium", "Belize", "Bermuda", "Brazil",
// "Canada", "Cayman Islands", "Chile", "China", 
// "Columbia", "Costa Rica", "Croatia", "Cyprus", 
// "Czech Republic", "Denmark", "Dominican Republic", 
// "England", "Estonia", "Fiji", "Finland", "France", 
// "French Guinea", "Georgia", "Germany", "Greece", 
// "Guatemala", "Holland", "Hong Kong", "Hungary", 
// "Iceland", "India", "Ireland", "Isle of Man", "Israel", 
// "Italy", "Jamaica", "Japan", "Kenya", "Latvia", 
// "Lebanon", "Luxembourg", "Malta", "Maryland", "Mexico", 
// "Montenegro", "Namibia", "Netherlands", 
// "New Zealand", "Nicaragua", "Norway", "Palestine", 
// "Peru", "Philippines", "Poland", "Portugal", 
// "Puerto Rico", "Romania", "Russia", "Scotland", 
// "Singaport", "Slovakia", "Slovenia", "South Australia", 
// "South Africa", "Spain", "Sweden", "Switzerland", 
// "Tasmania", "Thailand", "The Netherlands", "Turkey", 
// "UK", "Ukraine", "USA", "United Kingdom", "Uruguay",
// "Wales", "Venezuela"],
// populateCountrySelect: function() {
//   var select = document.getElementById('country-select');
//   for (country of this.countries) {
//     option = document.createElement('option')
//     option.innerText = country;
//     select.appendChild(option);
//   };
// }, 