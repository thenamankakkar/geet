const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let songs = new Schema({
    name: {type: String},
    link: {type: String},
    photo: {type: String},
}, {
    "collection": "songs"
});


module.exports = mongoose.model("songs", songs);
