var elementHelper = {
createElement: function(tag, innerText, value) {
  var element = document.createElement(tag);
  if (innerText) {
    element.innerText = innerText;
  };
  if (value !== undefined) {
    element.value = value
  };
  return element;
}
};

module.exports = elementHelper;