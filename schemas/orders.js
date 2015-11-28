/**
 * Created by teweiliou on 11/25/15.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('orders', new mongoose.Schema({
    "user_id": {type: Number, required: true},
    "orders": [
        {"order_number": {type: Number, required: true}},
        {"product_id": {type: Number, required: true}}
    ]
}), 'orders');


