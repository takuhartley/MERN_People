const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv/config");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Set up default mongoose connection
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB fam!")
  );
  
  // Routes
  // User Routes
  const usersRouter = require("./Routes/users").default;
  app.use("/users", usersRouter);
  
  // Politician Routes
  const politicianRouter = require("./Routes/politicians").default;
  app.use("/politicians", politicianRouter);

  // Server connection
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => console.log(`Connected to server on port ${PORT}`));
