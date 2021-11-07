const Survey = require("../models/surveyModel");

const createSurvey = async (req, res) => {
  try {
    const { forUserType, forUserValue, questions, createdBy, title } = req.body;
    const result = await Survey.create({
      title,
      forUserType,
      forUserValue,
      questions,
      createdBy,
    });
    res.send({
      status: 0,
      msg: "created",
    });
  } catch (error) {
    console.log(error);
  }
};

const getSurvey = async (req, res) => {
  try {
    let { gender, age } = req.body;
    let filter = {};
    if (gender == "m") {
      gender = "M";
    }
    if (gender == "f") {
      gender = "F";
    }
    if (age > 0 && age <= 10) {
      age = 10;
    }
    if (age > 10 && age <= 20) {
      age = 20;
    }
    if (age > 20 && age <= 30) {
      age = 30;
    }
    if (age > 30 && age <= 40) {
      age = 40;
    }
    if (age > 40 && age <= 50) {
      age = 50;
    }
    if (age > 50 && age <= 60) {
      age = 60;
    }
    console.log(gender, age);

    const result = await Survey.find({
      $or: [{ forUserValue: gender }, { forUserValue: age }],
    });
    res.send(result);
  } catch (e) {
    console.log(e);
  }
};

const getAllSurvey = async (req, res) => {
  try {
    const { userId } = req.body;
    const result = await Survey.find({ createdBy: userId });
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createSurvey, getSurvey, getAllSurvey };
