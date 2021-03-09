const assert = require('assert');
const Course = require('../model').course;

module.exports = {
    readAll: (req, res) => {
        // to read all data
        Course.find((err, result) => {
            if (err) assert.deepStrictEqual(null, err);
            res.json(result);
        });
    },
};
