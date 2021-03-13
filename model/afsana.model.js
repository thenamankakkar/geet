const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let afsana = new Schema({
    name: {type: String},
    link: {type: String},
    photo: {type: String},
}, {
    "collection": "afsana"
});

module.exports = mongoose.model("afsana", afsana);
