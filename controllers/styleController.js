const express = require("express");
const router = express.Router();
const styleApi = require("../api/styleApi")
const clientApi = require("../api/clientApi")
const scheduleApi = require("../api/scheduleApi")

router.get("/", function(_req, res) {
    styleApi.getAllStyles().then(styles => {
      console.log("styles ", styles);
      res.render('styles', { styles });
    });
  });

 
  
  //Field to input name
  router.post("/", function(req, res) {
    styleApi.createNewStyle(req.body)
    .then(() =>  styleApi.getAllStyles())
    .then(styles => clientApi.getAllClients()
      .then(clients => scheduleApi.getAllSchedules()
        .then(schedules => res.render('owner', {schedules, clients, styles}))));
  });
  
  //Update name
  router.put("/:id", function(req, res) {
    console.log(req.params.id)
    console.log(req.body)
    styleApi.updateStyle(req.params.id, req.body)
    .then(() =>  styleApi.getAllStyles())
    .then(styles => clientApi.getAllClients()
      .then(clients => scheduleApi.getAllSchedules()
        .then(schedules => res.render('owner', {schedules, clients, styles}))));
  });
  
  //Delete name
  router.delete("/:id", function(req, res) {
    styleApi.deleteStyle(req.params.id)
    .then(() =>  styleApi.getAllStyles())
      .then(styles => clientApi.getAllClients()
        .then(clients => scheduleApi.getAllSchedules()
          .then(schedules => res.render('owner', {schedules, clients, styles}))));
  });

  router.get("/owner", function(req, res) {
    styleApi.getAllStyles()
    .then(styles => clientApi.getAllClients()
      .then(clients => scheduleApi.getAllSchedules()
        .then(schedules => res.render('owner', {schedules, clients, styles}))));
  })
  
  router.get("/:styleId", function(req, res) {
    styleApi.getStyleById(req.params.styleId).then(style => {
      res.render('style', { style });
      // res.send(style);
    });
  });
  
  module.exports = router;