const mongoose = require("mongoose");

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
  description: {
    type: String,
    min: [3, "Whatchu about son"]
  },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", UserSchema);
