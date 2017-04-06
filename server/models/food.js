'use strict'

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

let schemaFoods = new Schema ({
  name : String,
  price : Number,
  expired_date : Date
})

let Food = Mongoose.model('Food', schemaFoods);

module.exports = Food;
