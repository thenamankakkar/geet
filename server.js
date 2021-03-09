var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/geet'); // connect to our database


var Songs = require('./models/bear');


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function (req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
    res.json({message: 'hooray! welcome to our api!'});
});

// more routes for our API will happen here
/*----------------creating-----------------------------------------*/
router.route('/songs')
    .get(function (req, res) {
        Songs.find(function (err, bears) {
            if (err)
                res.send(err);

            res.json(bears);
        });
    });

app.use('/', router);
app.listen(port);
console.log('Magic happens on port ' + port);
