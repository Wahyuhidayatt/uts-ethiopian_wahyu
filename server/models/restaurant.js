'use strict'

const Mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schemaRestaurant = new Schema ({
  name : String,
  owner : String,
  address : String,
  open_status : Boolean
})

let Restaurant = Mongoose.model('Restaurant', schemaRestaurant);

module.exports = Restaurant;
