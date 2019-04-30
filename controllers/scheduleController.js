const express = require("express");
const router = express.Router();
const scheduleApi = require("../api/scheduleApi")
const clientApi = require("../api/clientApi")

router.get("/", function(req, res) {
    scheduleApi.getAllSchedules().then(schedules => {
      res.send(schedules);
      //res.render('client', {clients});
    });
  });
  
  router.post("/register", function(req, res) {
    clientApi.createNewClient(req.body)
    .then(client => {
      req.body.client=client
      scheduleApi.createNewSchedule(req.body)
      .then(schedule => {
        console.log(schedule)
        res.render('schedule', {schedule})
      });
    });
  });

  //Field to input name
  router.post("/", function(req, res) {
    scheduleApi.createNewSchedule(req.body).then(schedule => {
      res.send(schedule);
    });
  });
  
  //Update name
  router.put("/:id", function(req, res) {
    scheduleApi.updateSchedule(req.params.id, req.body).then(() =>
      res.send()
    );
  });
  
  //Delete name
  router.delete("/:id", function(req, res) {
    scheduleApi.deleteSchedule(req.params.id).then(() =>
      res.send()
    );
  });
  
  module.exports = router;