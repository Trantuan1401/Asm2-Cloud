const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: String,
    category: String,
    price:Number,
    status: String
})
const Userdb = mongoose.model('userdb', schema);
module.exports = Userdb;