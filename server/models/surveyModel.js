const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  forUserType: {
    type: String,
    // a for age g for gender
    enum: ["A", "G"],
    default: "A",
    required: true,
  },
  forUserValue: {
    type: String,
    required: true,
  },
  questions: [],
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Survey", schema, "Survey");
