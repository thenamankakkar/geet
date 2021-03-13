const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let trending = new Schema({
    name: {type: String},
    link: {type: String},
    photo: {type: String},
}, {
    "collection": "trending"
});

module.exports = mongoose.model("trending", trending);
