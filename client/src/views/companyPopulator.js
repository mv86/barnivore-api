var ajaxHelper = require('../helper/ajaxHelper.js');
var eHelper = require('../helper/elementHelper.js');
var companyProducts = require('./companyProducts.js');

var populateCompanySelect = function(companies) {
  var companySelector = document.getElementById('company-select');
  var companyDisplay = document.getElementById('company-display')
  companySelector.style.visibility = 'visible';
  companySelector.options.length = 1;
  companyDisplay.style.visibility = 'visible';
  companyDisplay.innerHTML = '';

  for (var company of companies) {
    option = eHelper.createElement('option', company.company.company_name);
    option.style.backgroundColor = company.company.red_yellow_green.toLowerCase();
    companySelector.appendChild(option);
  }

  companySelector.onchange = function() {
    for (var company of companies) {
      if (this.value === company.company.company_name) {
        var productsApi = "http://www.barnivore.com/company/" + company.company.id + ".json"
        companyDisplay.innerHTML = '';
        
        liName = eHelper.createElement('li', company.company.company_name);
        liAddress = eHelper.createElement('li', company.company.address);
        liCity = eHelper.createElement('li', company.company.city);
        liStatus = eHelper.createElement('li', company.company.status);
        liStatus.style.color = company.company.red_yellow_green;
        liUrl = eHelper.createElement('li');
        a = eHelper.createElement('a', company.company.url)
        a.href = company.company.url;
        a.target = '_blank';
        liUrl.appendChild(a);
        viewProductsBtn = eHelper.createElement('button', 'View Products', 'view-products-btn')

        viewProductsBtn.onclick = function() {
          var productDiv = document.getElementById('products-div');
          productDiv.scrollIntoView();
          ajaxHelper.makeGetRequest(productsApi, companyProducts)
        }

        if (liName.innerText) companyDisplay.appendChild(liName);
        if (liAddress.innerText) companyDisplay.appendChild(liAddress);
        if (liCity.innerText) companyDisplay.appendChild(liCity);
        if (liUrl.innerText) companyDisplay.appendChild(liUrl);
        if (liStatus.innerText) companyDisplay.appendChild(liStatus);
        companyDisplay.appendChild(viewProductsBtn);
      }
    }
  }
};

module.exports = populateCompanySelect;