/**
 * Created by teweiliou on 11/25/15.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('product', new mongoose.Schema({
    "product_name": {type: String, required: true},
    "price": {type: Number, required: true}
}), 'product');