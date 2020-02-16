const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"]
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"]
  },
  userName: {
    type: String,
    required: [true, "Username is required"]
  },
  description: {
    type: String,
    min: [3, "Who tf are you?"]
  },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", User);
