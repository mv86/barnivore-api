var eHelper = require('../helper/elementHelper.js');

var companyProducts = function(companyProductsApi) {
  var productTableBody = document.getElementById('product-table-body');
  var company = JSON.parse(companyProductsApi);
  var products = company.company.products;
  var productInfoForDb = [];

  while (productTableBody.firstChild) {
      productTableBody.removeChild(productTableBody.firstChild);
  };

  var i = 1;

  for (var product of products) {
    var tableRow = eHelper.createElement('tr');
    var name = eHelper.createElement('td', product.product_name);
    var type = eHelper.createElement('td', product.booze_type);
    var status = eHelper.createElement('td', product.status);
    var rating = eHelper.createElement('input', '', 'input-rating-' + i);
    var addBtn = eHelper.createElement('button', 'Add me', 'add-product-btn-' + i);
    var add = eHelper.createElement('td');
    addBtn.style.outline = 'none';
    addBtn.style.width = '100px';
    addBtn.style.borderRadius = '15px';
    addBtn.style.backgroundColor = 'beige';
    rating.type = "number";
    rating.min = "0";
    rating.max = "10";
    rating.style.width = '35px';
    i++;

    var productInfo = {
      name: name.innerText,
      type: type.innerText,
      status: status.innerText,
      // rating: document.querySelector('#input-rating').value,
      rating: 0,
      add_btn_id: addBtn.id
    };
    productInfoForDb.push(productInfo);

    // addBtn.onclick = function() {
    //   console.log(productInfoForDb.rating)
    // };

    add.appendChild(addBtn);
    tableRow.appendChild(name);
    tableRow.appendChild(type);
    tableRow.appendChild(status);
    tableRow.appendChild(rating);
    tableRow.appendChild(add);
    productTableBody.appendChild(tableRow);
  };
};

module.exports = companyProducts;