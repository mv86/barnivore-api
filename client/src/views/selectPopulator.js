var ajaxHelper = require('../helper/ajaxHelper.js');

var countrySelect = {
 countries: ["Argentina", "Australia", "Austria",
 "Barbados", "Belgium", "Belize", "Bermuda", "Brazil",
 "Canada", "Cayman Islands", "Chile", "China", 
 "Columbia", "Costa Rica", "Croatia", "Cyprus", 
 "Czech Republic", "Denmark", "Dominican Republic", 
 "England", "Estonia", "Fiji", "Finland", "France", 
 "French Guinea", "Georgia", "Germany", "Greece", 
 "Guatemala", "Holland", "Hong Kong", "Hungary", 
 "Iceland", "India", "Ireland", "Isle of Man", "Israel", 
 "Italy", "Jamaica", "Japan", "Kenya", "Latvia", 
 "Lebanon", "Luxembourg", "Malta", "Maryland", "Mexico", 
 "Montenegro", "Namibia", "Netherlands", 
 "New Zealand", "Nicaragua", "Norway", "Palestine", 
 "Peru", "Philippines", "Poland", "Portugal", 
 "Puerto Rico", "Romania", "Russia", "Scotland", 
 "Singaport", "Slovakia", "Slovenia", "South Australia", 
 "South Africa", "Spain", "Sweden", "Switzerland", 
 "Tasmania", "Thailand", "The Netherlands", "Turkey", 
 "UK", "Ukraine", "USA", "United Kingdom", "Uruguay",
 "Wales", "Venezuela"],
 populateCountrySelect: function() {
   var select = document.getElementById('country-select');
   for (country of this.countries) {
     option = document.createElement('option')
     option.innerText = country;
     select.appendChild(option);
   };
 }, 
 setupApiRequest: function() {
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
  var apiInfo = function(apiData) {
    alcoholTypeSelect.options.selectedIndex = 0;
    countrySelector.options.selectedIndex = 0;
    var breweries = JSON.parse(apiData)
    countrySelector.style.visibility = 'visible';
    countrySelector.onchange = function() {
      var selectedCountryBreweries = [];
      for (brewery of breweries) {
        if (this.value === brewery.company.country) {
          selectedCountryBreweries.push(brewery);
        };
      };
      populateBrewerySelect(selectedCountryBreweries);
    };
  };
  var populateBrewerySelect = function(breweries) {
    brewerySelector.style.visibility = 'visible';
    ul = document.getElementById('brewery-display')
    brewerySelector.options.length = 1;
    if (breweries.length < 1) {
      ul.innerHTML = '';
      brewerySelector.options[0].innerText = 
      "None Found" ;
    } else {
      ul.innerHTML = '';
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
          ul.innerHTML = '';
          liName = document.createElement('li')
          liName.innerText = brewery.company.company_name;
          ul.appendChild(liName);
        }
      }
    }
  };
}
};

module.exports = countrySelect;