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
 }
};

module.exports = countrySelect;