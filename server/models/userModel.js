const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phoneNumber: String,
  age: Number,
  userType: {
    type: String,
    // C for cordinator R for respondent
    enum: ["C", "R"],
    default: "R",
    required: true,
  },
  gender: {
    type: String,
    enum: ["m", "f"],
    default: "m",
    required: true,
  },
});

module.exports = mongoose.model("userSchema", schema, "userSchema");
