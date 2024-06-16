const mongoose = require("mongoose");

let url =
  "mongodb+srv://wasanansh:L7pQn4NAJQ50pzgC@cluster0.217bqqy.mongodb.net/";
// let url = "mongodb://127.0.0.1:27017/HotelABC";
//connect to the database
mongoose.connect(url, {
  useNewUrlParser: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

//error
db.on("error", function (err) {
  console.log(err.message);
});

//up and running then print the message
db.once("open", function () {
  console.log("Successfully connected to the database");
});
