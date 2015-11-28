/**
 * Created by teweiliou on 11/25/15.
 */

var mongoose = require('mongoose');

module.exports = mongoose.model('delivery_dates', new mongoose.Schema({
    "order_num": {type: Number, required: true},
    "date": {type: Date, required: true}
}), 'delivery_dates');

