const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let sunanda = new Schema({
    name: {type: String},
    link: {type: String},
    photo: {type: String},
}, {
    "collection": "sunanda"
});

module.exports = mongoose.model("sunanda", sunanda);
