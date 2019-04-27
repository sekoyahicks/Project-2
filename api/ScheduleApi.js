const mongoose = require('../db/connection.js')
const express = require("express");
const router = express.Router();

const Schedule = mongoose.Schema({
    appointment: String,
});

const ScheduleCollection = mongoose.model('Schedule', Schedule)//Schedule to select date

//Grab date
router.get("/", function(req, res) {
    ScheduleCollection.find()
        .then(schedules => {
            res.send(schedules)
            //res.render('client', {clients});
        });
            });

//Create requested appointment time
router.post("/", function(req, res) {
    ScheduleCollection.create(req.body)
        .then(schedule => {
            res.send(schedule)
        })
});

//Update appointment
router.put("/:id", function(req, res) {
 ScheduleCollection.findByIdAndUpdate(req.params.id, req.body)
    .then(() =>
        res.send()
    );
 });

//Delete appointment
router.delete("/:id", function(req, res) {
    ScheduleCollection.findByIdAndDelete(req.params.id)
        .then(() =>
            res.send()
    );
});

module.exports = router;