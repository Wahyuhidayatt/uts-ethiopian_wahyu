const express = require('express');
const Food = require ('../models/food');

let methods = {}
  methods.create = (req, res) => {
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
  methods.getAll = (req, res) => {
    Food.find()
    .then(function(err, foodData) {
      if(err){
        res.send(err)
      }else{
        res.json(foodData)
      }
    })
  }

  methods.getOne = (req, res) => {
    Food.find({
      _id: req.params._id
    })
      .then(function (err, foodData) {
        if(err){
          res.send(err)
        }else{
          res.send(foodData)
        }
      })
  }

  methods.update = (req, res, next) => {
    Food.findById(req.params._id, function (err, food) {
        // Handle any possible database errors
        if (err) {
            res.status(500).send(err);
        } else {
            // Update each attribute with any possible attribute that may have been submitted in the body of the request
              // If that attribute isn't in the request body, default back to whatever it was before.
              food.name = req.body.name,
              food.price = req.body.price,
              food.expired_date = new Date(`${req.body.expired_date}`)
            // Save the updated document back to the database
            console.log(food);
            food.save(function (err, item) {
                if (err) {
                    res.status(500).send(err)
                }
                res.send("update food berhasil");
            });
        }
     });
  }
  //
  methods.delete = (req, res) => {
    Food.findByIdAndRemove(req.params._id, function (err, foodData) {
      // We'll create a simple object to send back with a message and the id of the document that was removed
      // You can really do this however you want, though.
      var response = {
          message: "successfully deleted",
          id : foodData._id
      };
      res.send(response);
    });
  }

module.exports = methods
