var ajaxHelper = require('../helper/ajaxHelper.js');
var eHelper = require('../helper/elementHelper.js');
var MapWrapper = require('../views/mapWrapper.js');

var setupApiRequests = function() {
  var countrySelector = document.getElementById('country-select');
  var companySelector = document.getElementById('company-select');
  var alcoholTypeSelect = document.getElementById('type-select');
  var waitOption = document.getElementById('wait');

  alcoholTypeSelect.style.visibility = 'visible';

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

   var filteredCountries = countries.filter( function(item, index, inputArray) {
    return inputArray.indexOf(item) == index;
  });

   for (country of filteredCountries) {
    option = eHelper.createElement('option', country)
    countrySelector.appendChild(option);
  };
};
var populateCompanySelect = function(companies) {
  // addCompaniesToMap(companies);
  companySelector.style.visibility = 'visible';
  ul = document.getElementById('company-display')
  companySelector.options.length = 1;
  ul.innerHTML = '';

  for (company of companies) {
    option = eHelper.createElement('option', company.company.company_name);
    option.style.backgroundColor = company.company.red_yellow_green.toLowerCase();
    companySelector.appendChild(option);
  }

  companySelector.onchange = function() {
    for (company of companies) {
      if (this.value === company.company.company_name) {
        ul.innerHTML = '';
        liName = eHelper.createElement('li', company.company.company_name)
        ul.appendChild(liName);
      }
    }
  }
};
// var addCompaniesToMap = function(companies) {
//   console.log(companies)
//   var map = document.getElementById('map-div')
//   var geo = new google.maps.Geocoder();
//   var country = companies[0].company.country;
//   var infoWindow = "There are " + companies.length + " companies selling this alcohol type in " + country + "!"

//   geo.geocode({'address': country}, function (results) {
//     var locationLat = results[0].geometry.location.lat();
//     var locationLng = results[0].geometry.location.lng();
//     var countryLocation = {lat: locationLat, lng: locationLng};
//     var mainMap = new MapWrapper(map, countryLocation, 6);
//     mainMap.addMarker(countryLocation, infoWindow);
//   });

// };
};

module.exports = setupApiRequests;