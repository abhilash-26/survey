const mongoose = require("mongoose");

const schema = mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  surveyId: {
    type: mongoose.Types.ObjectId,
    ref: "Survey",
  },
  answers: [],
});

module.exports = mongoose.model("Submission", schema, "Submission");
