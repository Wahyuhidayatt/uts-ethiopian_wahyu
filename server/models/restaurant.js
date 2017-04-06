'use strict'

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

let schemaRestaurant = new Schema ({
  name : String,
  owner : String,
  address : String,
  open_status : Boolean,
  menu : [{type : Schema.Types.ObjectId, ref : 'Food'}]
})

let Restaurant = Mongoose.model('Restaurant', schemaRestaurant);

module.exports = Restaurant;
