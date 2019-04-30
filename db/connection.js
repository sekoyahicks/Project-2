// const connectionString = "mongodb://localhost/Project-2";

// //newUrlParser disables the deprication warning
// mongoose.connect(connectionString, { useNewUrlParser: true }).then(() => {
//   console.log("connected to mongo at: " + connectionString);
// });

// mongoose.connection.once("open", function() {
//   console.log("MOngoose has connected to MongoDB");
// });
// module.exports = mongoose;


// /

// requirements: import mongoose
const mongoose = require('mongoose');
// Connect to database
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
}
else {
  mongoose.connect('mongodb://localhost/Project-2', { useNewUrlParser: true });
}
mongoose.connection.on('error', function (err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
}
);
mongoose.connection.once('open', function () {
  console.log("Mongoose has connected to MongoDB!");
});
// export your mongoose connection
module.exports = mongoose;
