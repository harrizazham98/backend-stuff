const mongoose = require("mongoose");
// const uri = "mongodb+srv://harrizazham98:H@yu@!m@n46@cluster0.bajvmiq.mongodb.net/Mydatabase?retryWrites=true&w=majority";

const username = "harrizazham98";
const password = "H%40yu%40%21m%40n46";
const cluster = "cluster0";
const dbname = "Mydatabase";

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.bajvmiq.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

module.exports = db;