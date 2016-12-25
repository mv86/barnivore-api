var ajaxHelper = {
  makeGetRequest: function(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
      if (this.status !== 200) {
        console.log('Request failed: ', this.status);
      } else {
        callback(this.responseText);
      }
    }
    request.send();
  }
};

module.exports = ajaxHelper;