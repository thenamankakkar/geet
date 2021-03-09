// app/models/bear.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BearSchema   = new Schema({
    name: String,
    link : String
});

module.exports = mongoose.model('Songs', BearSchema);
