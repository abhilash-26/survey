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
    const { gender, age } = req.body;
    let filter = {};

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
