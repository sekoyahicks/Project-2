const express = require("express");
const router = express.Router();
const clientApi = require("../api/clientApi");

router.get("/", function(req, res) {
    clientApi.getAllClients().then(clients => {
      res.render(clients);
      //res.render('client', {clients});
    });
  });
  
  //Field to input name
  router.post("/", function(req, res) {
    clientApi.createNewClient(req.body).then(client => {
      res.render(client);
      //res.render('client', {clients});
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
    clientApi.deleteClient(req.params.id).then(() =>
      //res.send()
      res.render()
    );
  });
  
  module.exports = router;