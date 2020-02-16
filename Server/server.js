const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const PORT = 4000;
const app = express();
require("dotenv/config");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Set up default mongoose connection
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("Connected to DB fam!")
);

app.get("/home", function(req, res) {
  res.send("Home");
});

app.get("/about", function(req, res) {
  res.send("About");
});

app.get("/", function(req, res) {
  res.send("Base Page");
});

app.post("/register", function(req, res) {
  res.send("Register!");
});

app.post("/login", function(req, res) {
  res.send("Login");
});

app.listen(PORT, function() {
  console.log("We're connected broski on Port: " + PORT);
});
