const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
let User = require('./Models/User');
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());
mongoose.connect("mongodb://127.0.0.1:27017/Person", { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection is in fam");
});

app.listen(PORT, function() {
  console.log("We're connected broski on Port: " + PORT);
});