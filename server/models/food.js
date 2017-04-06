'use strict'

const Mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schemaFoods = new Schema ({
  name : String,
  price : Number,
  expired_date : new Date()
})

let Food = mongoose.model('Food', schemaFoods);

module.exports = Food;
