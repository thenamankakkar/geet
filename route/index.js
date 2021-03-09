const express = require('express');
const cRoute = express.Router();
const courseController = require('../controller');
// read
cRoute.route('/songs').get(courseController.readAll);
module.exports = cRoute;
