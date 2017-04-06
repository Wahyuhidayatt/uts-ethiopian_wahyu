var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var app = express();

// var restaurants = require('../routes/restaurant');
var foods = require('./routes/foods');

mongoose.connect('mongodb://localhost/uts_wahyu');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000)

// app.use('/api/restaurant',restaurants);
app.use('/api/food', foods);



module.exports = app
