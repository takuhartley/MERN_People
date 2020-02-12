const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
let User = require('./Models/User');
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/People';
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', function (req, res) {
  res.send('Hello World!')
})

connection.once("open", function() {
  console.log("MongoDB database connection is in fam");
});

app.listen(PORT, function() {
  console.log("We're connected broski on Port: " + PORT);
});