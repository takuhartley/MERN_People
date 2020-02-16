const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const PORT = 4000;
const app = express();
const usersRouter = require("./Routes/users");
require("dotenv/config");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Set up default mongoose connection
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("Connected to DB fam!")
);

// Routes
app.use("/users", usersRouter);

app.listen(PORT, function() {
  console.log("We're connected broski on Port: " + PORT);
});
