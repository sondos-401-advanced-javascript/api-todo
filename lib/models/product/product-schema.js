'use strict';

const mongoose = require('mongoose');

const products = mongoose.Schema({
    name:{type:String,required:true},
    category: {type:String,required:true},
    price: {type:String,required:true},
    inStock: {type:Boolean,required:true},
});



module.exports = mongoose.model('products',products);