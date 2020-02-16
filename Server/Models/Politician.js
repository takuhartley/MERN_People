import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;

const PoliticianSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"]
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"]
  },
  description: {
    type: String,
    required: [true, "Please enter description of them"]
  },
  date: { type: Date, default: Date.now }
});

export default model("Politician", PoliticianSchema);