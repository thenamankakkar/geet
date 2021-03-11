const express = require('express');
const cRoute = express.Router();
const courseController = require('../controller');
// read
cRoute.route('/songs').get(courseController.readAll);
cRoute.route('/songs/:id').get(courseController.readSingle);
module.exports = cRoute;
