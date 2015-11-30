var express = require('express');
var router = express.Router();
var passport = require('passport');

var mongoose = require('mongoose');
var Order = require('../schemas/orders');
var Product = require('../schemas/products');


var url = require('url');


var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
};


module.exports = function(passport){
    router.post('/request/login', passport.authenticate('local', {
        successRedirect: '/home',
        failureRedirect: '/login.html',
        failureFlash : true
    }));

    router.post('/request/signup', passport.authenticate('signup', {
        successRedirect: '/home',
        failureRedirect: '/signup.html',
        failureFlash : true
    }));

    router.get('/home', isAuthenticated, function(req, res){
        res.render('home', {
            username: req.user._doc.username
        });
    });

    router.get('/admin', isAuthenticated, function(req, res){
        if(req.user._doc.admin){
            res.render('admin', {
                username: req.user._doc.username
            });
        }else{
            res.render('notadmin', {
                username: req.user._doc.username
            });
        }
    });

    router.get('/pricing', isAuthenticated, function(req, res){
        res.render('pricing', {
            username: req.user._doc.username
        });
    });

    router.get('/checkout', isAuthenticated, function(req, res){
        res.render('checkout', {
            username: req.user._doc.username
        });
    });

    router.get('/orderHistory', isAuthenticated, function(req, res){
        res.render('orderHistory', {
            username: req.user._doc.username
        });
    });

    router.get('/getOrderHistory', isAuthenticated, function(req, res){
        var username = req.user._doc.username;
        Order.find({"username": username}, function(err, result){
            res.send(result.map(function(data){
                return data._doc;
            }))
        });
    });

    router.post('/placeorder', isAuthenticated, function(req, res){
        var orderItems = req.body.orderItems;

        Order.collection.insert([{
            "username": req.user._doc.username,
            "orderItem": orderItems
        }], function(err, result){
            res.send({
                "result": "success"
            })
        });

    });

    router.get('/products/get', isAuthenticated, function(req, res){
        Product.find({}, function(err, result){
            res.send(result);
        });
    });

    router.post('/products/update', isAuthenticated, function(req, res){
        var updateObj = req.body.product;
        var updateId = req.body._id;
        Product.update({_id:updateId}, updateObj, {upsert:false}, function(err, result){
            res.send({"result": "success"});
        });
    });

    router.post('/products/delete', isAuthenticated, function(req, res){
        var updateId = req.body._id;
        Product.remove({_id:updateId}, function(err, result){
            res.send({"result": "success"});
        });
    });

    router.post('/products/add', isAuthenticated, function(req, res){
        var productName = req.body.product_name;
        var productPrice = req.body.price;
        Product.collection.insert({
            product_name:productName,
            price: productPrice
        }, function(err, result){
            res.send({"result": "success"});
        });
    });

    return router;
};