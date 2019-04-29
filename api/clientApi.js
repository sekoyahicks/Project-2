const mongoose = require("../db/connection.js");
const Client = mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  email: String,
  phoneNumber: String
});

const ClientCollection = mongoose.model("Client", Client);

function getAllClients() {
    return ClientCollection.find()
}

function createNewClient(client) {
    return ClientCollection.create(client)
}

function updateClient(clientId, client) {
    return ClientCollection.findByIdAndUpdate(clientId, client)
}

function deleteClient(clientId) {
    return ClientCollection.findByIdAndDelete(clientId)
}

module.exports = {
    getAllClients,
    createNewClient,
    updateClient,
    deleteClient
}