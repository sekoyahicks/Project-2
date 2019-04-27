const express = require("express");
const router = express.Router();
const mongoose = require("../db/connection.js");

const Client = mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  email: String,
  phoneNumber: String
});

const ClientCollection = mongoose.model("Client", Client);

router.get("/", function(req, res) {
  ClientCollection.find().then(clients => {
    res.send(clients);
    //res.render('client', {clients});
  });
});

//Field to input name
router.post("/", function(req, res) {
  ClientCollection.create(req.body).then(client => {
    res.send(client);
  });
});

//Update name
router.put("/:id", function(req, res) {
  ClientCollection.findByIdAndUpdate(req.params.id, req.body).then(() =>
    res.send()
  );
});

//Delete name
router.delete("/:id", function(req, res) {
  ClientCollection.findByIdAndDelete(req.params.id).then(() =>
    res.send()
  );
});

module.exports = router;