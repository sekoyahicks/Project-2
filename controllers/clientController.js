const express = require("express");
const router = express.Router();
const styleApi = require("../api/clientApi")

router.get("/", function(req, res) {
    clientApi.getAllClients().then(clients => {
      res.send(clients);
      //res.render('client', {clients});
    });
  });
  
  //Field to input name
  router.post("/", function(req, res) {
    clientApi.createNewClient(req.body).then(client => {
      res.send(client);
    });
  });
  
  //Update name
  router.put("/:id", function(req, res) {
    clientApi.updateClient(req.params.id, req.body).then(() =>
      res.send()
    );
  });
  
  //Delete name
  router.delete("/:id", function(req, res) {
    clientApi.deleteClient(req.params.id).then(() =>
      res.send()
    );
  });
  
  module.exports = router;