const express = require("express");
const router = express.Router();
const styleApi = require("../api/styleApi")
const clientApi = require("../api/clientApi")
const scheduleApi = require("../api/scheduleApi")

router.get("/", function(_req, res) {
    clientApi.getAllClients().then(clients => {
      //res.send({clients});
       res.render('client', {clients});
    });
  });
  
  //Field to input name
  router.post("/", function(req, res) {
    clientApi.createNewClient(req.body).then(client => {
      //res.send({client});
      res.render('client', {clients});
    });
  });
  
  //Update name
  router.put("/:id", function(req, res) {
    clientApi.updateClient(req.params.id, req.body).then(() =>
      res.render()
      //res.render()
    );
  });
  
  //Delete name
  router.delete("/:id", function(req, res) {
    clientApi.deleteClient(req.params.id)
    .then(() =>  styleApi.getAllStyles())
    .then(styles => clientApi.getAllClients()
      .then(clients => scheduleApi.getAllSchedules()
        .then(schedules => res.render('owner', {schedules, clients, styles}))));
  });
  
  module.exports = router;