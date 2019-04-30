const express = require("express");
const router = express.Router();
const styleApi = require("./api/styleApi")

router.get("/:styleId", function(req, res) {
  styleApi.getStyleById(req.params.styleId).then(style => {
    res.render('style', { style });
  });
});

router.get("/", function(req, res) {
    styleApi.getAllStyles().then(styles => {
      console.log("styles ", styles);
      res.render('styles', { styles });
    });
  });
  
  //Field to input name
  router.post("/", function(req, res) {
    styleApi.createNewStyle(req.body).then(style => {
      res.render(style);
    });
  });
  
  //Update name
  router.put("/:id", function(req, res) {
    styleApi.updateStyle(req.params.id, req.body).then(() =>
      res.render()
    );
  });
  
  //Delete name
  router.delete("/:id", function(req, res) {
    styleApi.deleteStyle(req.params.id).then(() =>
      res.render()
    );
  });
  
  module.exports = router;