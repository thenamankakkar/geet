const assert = require('assert');
const Course = require('../model').course;
const Baani = require('../model').baani;
const Karan = require('../model').karan;
const Afsana = require('../model').afsana;
const Sunanda = require('../model').sunanda;
const Trending = require('../model').trending;
const Geetone = require('../model').geetone;

module.exports = {
    /*songs*/
    readAll: (req, res) => {
        // to read all data
        Course.find((err, result) => {
            if (err) assert.deepStrictEqual(null, err);
            res.json(result);
        });
    },
    readSingle: (req, res) => {
        let id = req.params.id;
        let array = [];
        Course.findById({_id: id}, (err, result) => {
            if (err) assert.deepStrictEqual(null, err);
            array.push(result);
            res.json(array);
        });
    },

    baani: (req, res) => {
        // to read all data
        Baani.find((err, result) => {
            if (err) assert.deepStrictEqual(null, err);
            res.json(result);
        });
    },
    baanisingle: (req, res) => {
        let id = req.params.id;
        let array = [];
        Baani.findById({_id: id}, (err, result) => {
            if (err) assert.deepStrictEqual(null, err);
            array.push(result);
            res.json(array);
        });
    },

    /*karan*/
    karan: (req, res) => {
        // to read all data
        Karan.find((err, result) => {
            if (err) assert.deepStrictEqual(null, err);
            res.json(result);
        });
    },
    karansingle: (req, res) => {
        let id = req.params.id;
        let array = [];
        Karan.findById({_id: id}, (err, result) => {
            if (err) assert.deepStrictEqual(null, err);
            array.push(result);
            res.json(array);
        });
    },

    /*afsana*/
    afsana: (req, res) => {
        // to read all data
        Afsana.find((err, result) => {
            if (err) assert.deepStrictEqual(null, err);
            res.json(result);
        });
    },
    afsanasingle: (req, res) => {
        let id = req.params.id;
        let array = [];
        Afsana.findById({_id: id}, (err, result) => {
            if (err) assert.deepStrictEqual(null, err);
            array.push(result);
            res.json(array);
        });
    },

    /*sunanda*/
    sunanda: (req, res) => {
        // to read all data
        Sunanda.find((err, result) => {
            if (err) assert.deepStrictEqual(null, err);
            res.json(result);
        });
    },
    sunandasingle: (req, res) => {
        let id = req.params.id;
        let array = [];
        Sunanda.findById({_id: id}, (err, result) => {
            if (err) assert.deepStrictEqual(null, err);
            array.push(result);
            res.json(array);
        });
    },

    /*trending*/
    trending: (req, res) => {
        // to read all data
        Trending.find((err, result) => {
            if (err) assert.deepStrictEqual(null, err);
            res.json(result);
        });
    },
    trendingsingle: (req, res) => {
        let id = req.params.id;
        let array = [];
        Trending.findById({_id: id}, (err, result) => {
            if (err) assert.deepStrictEqual(null, err);
            array.push(result);
            res.json(array);
        });
    },

    /*geetone*/
    geetone: (req, res) => {
        // to read all data
        Geetone.find((err, result) => {
            if (err) assert.deepStrictEqual(null, err);
            res.json(result);
        });
    },
};
