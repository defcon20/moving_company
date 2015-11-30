/**
 * Created by teweiliou on 11/25/15.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('orders', new mongoose.Schema({
    "username": {type: String, required: true},
    "orderItem": {type: Array, default: [], required: true}
}), 'orders');


