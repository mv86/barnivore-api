var elementHelper = {
createElement: function(tag, innerText, id) {
  var element = document.createElement(tag);
  if (innerText) {
    element.innerText = innerText;
  };
  if (id !== undefined) {
    element.id = id;
  };
  return element;
}
};

module.exports = elementHelper;