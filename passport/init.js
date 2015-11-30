var mongoose = require('mongoose');
var User = require('../schemas/users');
var Login = require('./login');
var Signup = require('./signup');

module.exports = function(passport){
    passport.serializeUser(function(user, done) {
        console.log('serializing user: ');console.log(user);
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            console.log('deserializing user:',user);
            done(err, user);
        });
    });

    Login(passport);
    Signup(passport);
};