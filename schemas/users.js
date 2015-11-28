/**
 * Created by teweiliou on 11/25/15.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('users', new mongoose.Schema({
    "user_id": {type: Number, required: true},
    "name": {type: String, required: true},
    "email": {type: String, required: true},
    "password": {type: String, required: true},
    "admin": {type: Boolean, required: true}
}), 'users');


