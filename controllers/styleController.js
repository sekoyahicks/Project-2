const express = require("express");
const router = express.Router();
const styleApi = require("../api/styleApi")

router.get("/", function(req, res) {
    styleApi.getAllStyles().then(styles => {
      res.send(styles);
      //res.render('client', {clients});
    });
  });
  
  //Field to input name
  router.post("/", function(req, res) {
    styleApi.createNewStyle(req.body).then(style => {
      res.send(style);
    });
  });
  
  //Update name
  router.put("/:id", function(req, res) {
    styleApi.updateStyle(req.params.id, req.body).then(() =>
      res.send()
    );
  });
  
  //Delete name
  router.delete("/:id", function(req, res) {
    styleApi.deleteStyle(req.params.id).then(() =>
      res.send()
    );
  });
  
  module.exports = router;