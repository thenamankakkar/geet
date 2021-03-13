const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let baani = new Schema({
    name: {type: String},
    link: {type: String},
    photo: {type: String},
}, {
    "collection": "baani"
});

module.exports = mongoose.model("baani", baani);
