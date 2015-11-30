/**
 * Created by teweiliou on 11/25/15.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('users', new mongoose.Schema({
    "username": {type: String, required: true},
    "email": {type: String, required: false},
    "password": {type: String, required: true},
    "admin": {type: Boolean, required: false}
}), 'users');


