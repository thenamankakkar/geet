const express = require('express');
const cRoute = express.Router();

const courseController = require('../controller');
// read
cRoute.route('/songs').get(courseController.readAll);
cRoute.route('/songs/:id').get(courseController.readSingle);

cRoute.route('/baani').get(courseController.baani);
cRoute.route('/baani/:id').get(courseController.baanisingle);

cRoute.route('/karan').get(courseController.karan);
cRoute.route('/karan/:id').get(courseController.karansingle);

cRoute.route('/afsana').get(courseController.afsana);
cRoute.route('/afsana/:id').get(courseController.afsanasingle);

cRoute.route('/sunanda').get(courseController.sunanda);
cRoute.route('/sunanda/:id').get(courseController.sunandasingle);

cRoute.route('/trending').get(courseController.trending);
cRoute.route('/trending/:id').get(courseController.trendingsingle);


module.exports = cRoute;
