/**
 * Created by teweiliou on 11/26/15.
 */
//var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/moving_company', function(err){
//    var Product = mongoose.model('product', new mongoose.Schema({
//        "product_id": {type: Number, required: true},
//        "product_name": {type: String, required: true},
//        "price": {type: Number, required: true}
//    }), 'product');
//
//    Product.find({}, function(err, product){
//        if(err){ throw err; }
//        console.log(product);
//    });
//});

mongoose.connect('mongodb://localhost/moving_company', function(err){
    var User = mongoose.model('users', new mongoose.Schema({
        "user_id": {type: Number, required: true},
        "name": {type: String, required: true},
        "email": {type: String, required: true},
        "password": {type: String, required: true},
        "admin": {type: Boolean, required: true}
    }), 'users');

    User.findOne({"email":"david@gmail.com"}, function(err, email){
        if(err){ throw err; }
        if(email!==null){
            console.log("email already exists");
        }
        console.log(email);
    });
});