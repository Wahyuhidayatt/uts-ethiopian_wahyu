const express = require('express');
const Food = require ('../models/foodController');

let methods = {
  methods.create = () => {
    Food.create({
      name : req.body.name,
      price : req.body.price,
      expired_date : new Date(`${req.body.expired_date}`)
    })
    .then(function (err, dataFood) {
      if(err){
        res.send(err)
      }else {
        res.json(dataFood)
      }
    })
  }
}

module.exports = methods
