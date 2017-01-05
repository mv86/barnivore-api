var ajaxHelper = require('../helper/ajaxHelper.js');
var countryPopulator = require('../views/countryPopulator.js');
var companyPopulator = require('../views/companyPopulator.js');
var mapPopulator = require('../views/mapPopulator.js');

var setupApiRequests = function() {
  var countrySelector = document.getElementById('country-select');
  var companySelector = document.getElementById('company-select');
  var alcoholTypeSelect = document.getElementById('type-select');
  var companyDisplay = document.getElementById('company-display')
  var map = document.getElementById('map-div');
  var waitOption = document.getElementById('wait');
  alcoholTypeSelect.style.visibility = 'visible';

  alcoholTypeSelect.onchange = function() {
    countrySelector.style.visibility = 'hidden';
    companySelector.style.visibility = 'hidden';
    companyDisplay.style.visibility = 'hidden';
    map.style.visibility = 'hidden';

    if (alcoholTypeSelect.value !== 'select') {
      waitOption.hidden = false;
      ajaxHelper.makeGetRequest(alcoholTypeSelect.value, companyApiInfo)
      alcoholTypeSelect.options.selectedIndex = 4;
      waitOption.hidden = true;
    };
    
  };

  var companyApiInfo = function(apiData) {
    var companies = JSON.parse(apiData)
    countryPopulator(companies);
    alcoholTypeSelect.options.selectedIndex = 0;
    countrySelector.options.selectedIndex = 0;
    countrySelector.style.visibility = 'visible';

    countrySelector.onchange = function() {
      var selectedCountryCompanies = [];
      for (var company of companies) {
        if (this.value === company.company.country) {
          selectedCountryCompanies.push(company);
        };
      };
      companyPopulator(selectedCountryCompanies);
      mapPopulator(selectedCountryCompanies);
    };

  };
};

module.exports = setupApiRequests;