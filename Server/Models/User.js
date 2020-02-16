const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
    required: [true, "Username is required"],
    min: [3, "Please enter a Username longer than 3 characters"]
  },
  email: {
    type: String,
    min: [3, "Please enter a valid email"]
  },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", UserSchema);
