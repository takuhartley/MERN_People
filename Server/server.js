const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv/config");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const usersRouter = require("./Routes/users");
app.use("/users", usersRouter);

// Set up default mongoose connection
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB fam!")
);

// Server connection
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Connected to server on port ${PORT}`));
