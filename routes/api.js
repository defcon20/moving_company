var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Product = require('../schemas/products');
var User = require('../schemas/users');
var Order = require('../schemas/orders');
var Location =  require('../schemas/locations');
var Delivery = require('../schemas/delivery_dates');

//routing point for user login


//user registration: findOne if user email exists, if exists then send false
//http://localhost:8888/api/user/david@gmail.com
router.get('/user/:email', function(req, res) {
  User.findOne({"email": req.params.email}, function(err, email){
    if(email!==null){
      console.log("Email is already registered");
      res.send(false);
    }
    else{
      //this needs to be a database insert
      User.insert(
          [
            {"name": req.name, "email": req.email, "password": req.password, "admin": req.admin}
          ], function (err, data){
            res.send(data);
          }
      );
    }
  })
});

//DONE:populate product fields for pricing page
router.get('/products', function(req, res) {
  Product.find({}, function(err, product){
    res.contentType('application/json');
    res.send(product);
  })
});

//product list: gets endpoint for different products;
//http://localhost:8888/api/product/4
router.get('/products/:id', function(req, res) {
  Product.find({"product_id": req.params.id}, function(err, product){

    res.contentType('application/json');
    res.send(product);
  })
});

//location delivery: get endpoint for list of locations
//http://localhost:8888/api/location/3
router.get('/location/:id', function(req, res) {
  Location.findOne({"user_id": req.params.id}, function(err, location){
    console.log(location);
    res.send(location);
  })
});

//user history: get endpoint for orders list nest query with product
//http://localhost:8888/api/order/3
router.get('/order/:id', function(req, res) {
  Order.findOne({"user_id": req.params.id}, function(err, order){
    console.log(order);
    res.send(order);
  })
});

//routing point for system checkout

//admin user inserts
//admin user deletes
//admin user updates




module.exports = router;
