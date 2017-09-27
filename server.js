var app = require('./express');
var express = app.express;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

//require("./test/app");
require("./assignment/app")

var port = process.env.PORT || 9000;

app.listen(port);