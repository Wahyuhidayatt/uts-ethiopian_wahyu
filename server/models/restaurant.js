'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schemaRestaurant = new Schema ({
  name : String,
  owner : String,
  address : String,
  open_status : Boolean
})

let Restaurant = mongoose.model('Restaurant', schemaRestaurant);

module.exports = Restaurant;
