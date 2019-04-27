const mongoose = require('../db/connection.js')
const express = require("express");
const router = express.Router();

const Style = mongoose.Schema({
    name: String,
    description: String,
    cost: Number
});

const StyleCollection = mongoose.model('Style', Style)

router.get('/', function(req, res){
    StyleCollection.find()
        .then(styles => {
            res.send(styles)
            //res.render('client', {clients});
        })
            });

//Field to input name
router.post("/", function(req, res) {
    StyleCollection.create(req.body)
        .then(style => {
            res.send(style)
        })
});

//Update name
router.put("/:id", function(req, res) {
 StyleCollection.findByIdAndUpdate(req.params.id, req.body)
    .then(() =>
        res.send()
    );
 });

//Delete name
router.delete("/:id", function(req, res) {
    StyleCollection.findByIdAndDelete(req.params.id)
    .then(() =>
        res.send()
    );
});

module.exports = router;