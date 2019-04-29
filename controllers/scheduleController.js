const express = require("express");
const router = express.Router();
const styleApi = require("../api/scheduleApi")

router.get("/", function(req, res) {
    scheduleApi.getAllSchedule().then(schedules => {
      res.send(schedules);
      //res.render('client', {clients});
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