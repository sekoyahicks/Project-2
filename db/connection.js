const mongoose = require("mongoose");
const connectionString = "mongodb://localhost/Project-2";

//newUrlParser disables the deprication warning
mongoose.connect(connectionString, { useNewUrlParser: true }).then(() => {
  console.log("connected to mongo at: " + connectionString);
});

mongoose.connection.once("open", function() {
  console.log("MOngoose has connected to MongoDB");
});
module.exports = mongoose;
