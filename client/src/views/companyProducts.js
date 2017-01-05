var eHelper = require('../helper/elementHelper.js');

var companyProductsApi = function(companyProducts) {
  var productTableBody = document.getElementById('product-table-body');
  var company = JSON.parse(companyProducts);
  var products = company.company.products;

  while (productTableBody.firstChild) {
      productTableBody.removeChild(productTableBody.firstChild);
  };

  for (var product of products) {
    var tableRow = eHelper.createElement('tr');
    var name = eHelper.createElement('td', product.product_name);
    var type = eHelper.createElement('td', product.booze_type);
    var status = eHelper.createElement('td', product.status);
    var rating = eHelper.createElement('input', '', 'input-rating');
    var addBtn = eHelper.createElement('button', 'Add me', 'add-product-btn');
    var add = eHelper.createElement('td');
    add.appendChild(addBtn);
    tableRow.appendChild(name);
    tableRow.appendChild(type);
    tableRow.appendChild(status);
    tableRow.appendChild(rating);
    tableRow.appendChild(add);
    productTableBody.appendChild(tableRow);
  };

};

module.exports = companyProductsApi;