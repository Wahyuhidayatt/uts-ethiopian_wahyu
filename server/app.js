var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')


var restaurants = require('./routes/restaurants');
var foods = require('./routes/foods');

var app = express();

mongoose.connect('mongodb://localhost/listdummy');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000)

app.use('/',restaurants)

app.use('/api', foods);


module.exports = app
