/**
 * Created by teweiliou on 11/25/15.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('locations', new mongoose.Schema({
    "user_id": {type: Number, required: true},
    "orders": [
        {"order_number": {type: Number, required: true}},
        {"address": {type: String, required: true}},
        {"zipcode": {type: Number, required: true}},
        {"city": {type: String, required: true}},
        {"state": {type: String, required: true}}
    ]
}), 'locations');


