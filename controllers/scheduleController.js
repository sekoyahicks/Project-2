const express = require("express");
const router = express.Router();
const styleApi = require("../api/styleApi")
const clientApi = require("../api/clientApi")
const scheduleApi = require("../api/scheduleApi")

router.get("/", function(_req, res) {
    scheduleApi.getAllSchedules().then(schedules => {
      res.render(schedules);
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
      res.render(schedule);
    });
  });
  
  //Update name
  router.put("/:id", function(req, res) {
    scheduleApi.updateSchedule(req.params.id, req.body).then(() =>
      res.render()
    );
  });
  
  //Delete name
  router.delete("/:id", function(req, res) {
    scheduleApi.deleteSchedule(req.params.id)
    .then(() =>  styleApi.getAllStyles())
    .then(styles => clientApi.getAllClients()
      .then(clients => scheduleApi.getAllSchedules()
        .then(schedules => res.render('owner', {schedules, clients, styles}))));
  });
  
  module.exports = router;
