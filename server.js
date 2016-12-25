var express = require('express');
var app = express();
var path = require('path');
var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/barnivoreDrinks';

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});