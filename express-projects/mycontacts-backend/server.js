const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5001
const db = require("./config/dbConnection")

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.listen(port, () => {
console.log(`Server running on port ${port}`);
// console.log("Database connected: ",db.connection.name ); 
});






