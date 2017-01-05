var companyProductsApiRequest = function(companyProducts) {
  var company = JSON.parse(companyProducts);
  var products = company.company.products;
  console.log(products)
};


module.exports = companyProductsApiRequest;