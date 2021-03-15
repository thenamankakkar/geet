const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let geetone = new Schema({
    name: {type: String},
    link: {type: String},
    photo: {type: String},
}, {
    "collection": "geetone"
});


module.exports = mongoose.model("geetone", geetone);
