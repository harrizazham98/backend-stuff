const mongoose = require("mongoose");
// const uri = "mongodb+srv://harrizazham98:H@yu@!m@n46@cluster0.bajvmiq.mongodb.net/Mydatabase?retryWrites=true&w=majority";

const username = "djfkgnjzdndnhjn";
const password = "sgldgbdhgdgf";
const cluster = "jbndjlgn";
const dbname = "Mjngdfngn";

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