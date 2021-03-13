const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let karan = new Schema({
    name: {type: String},
    link: {type: String},
    photo: {type: String},
}, {
    "collection": "karan"
});

module.exports = mongoose.model("karan", karan);
