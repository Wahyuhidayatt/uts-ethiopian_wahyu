const express = require('express');
const Restaurant = require('../models/restaurant');
let methods = {}

methods.create = (req, res) => {
  Restaurant.create ({
    name : req.body.name,
    owner : req.body.owner,
    address : req.body.address,
    open_status : req.body.open_status,
    menu : []
  })
  .then(function (err, data) {
    if(err){
      res.send(err)
    }else {
      res.json(data)
    }
  })
}
methods.getAll = (req, res) => {
  Restaurant.find()
  .then(function(err, data) {
    if(err){
      res.send(err)
    }else{
      res.json(data)
    }
  })
}

methods.getOne = (req, res) => {
  Restaurant.find({
    _id: req.params._id
  })
  .then(function (err, data) {
    if(err){
      res.send(err)
    }else{
      res.send(data)
    }
  })
}

methods.update = (req, res, next) => {
  Restaurant.findById(req.params._id, function (err, data) {
    if (err) {
      res.status(500).send(err);
    } else {
      data.name = req.body.name,
      data.owner = req.body.owner,
      data.address = req.body.address,
      data.open_status = req.body.open_status
      data.save(function (err, dataUpdate) {
        if (err) {
          res.status(500).send(err)
        }
        res.json(dataUpdate);
      });
    }
  });
}
//
methods.delete = (req, res) => {
  Restaurant.findByIdAndRemove(req.params._id, function (err, data) {
    var response = {
      message: "successfully deleted",
      id : data._id
    };
    res.send(response);
  });
}

//Ambil bonus//
methods.menu = (req, res) => {
  Restaurant.findByIdAndUpdate(req.params.id,
    { $push: { "menu": req.body.menu_id} },
    {safe: true, upsert: true, new: true},
    function (err, data) {
      if (err) {
        res.json(err)
      }else{
        res.json({data: data})
      }
  })
}


module.exports = methods
