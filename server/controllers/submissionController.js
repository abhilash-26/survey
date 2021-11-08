const Submission = require("../models/submissionModel");

const createSubmission = async (req, res) => {
  try {
    const { userId, surveyId, answers } = req.body;
    const result = await Submission.create({
      userId,
      surveyId,
      answers,
    });
    res.send({
      status: 0,
      msg: "submitted sucessfully",
    });
  } catch (error) {
    console.log(error);
  }
};

const subMissionCount = async (req, res) => {
  try {
    const { surveyId } = req.body;
    const result = await Submission.find({
      surveyId,
    });
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

const submissionStatus = async (req, res) => {
  try {
    const { surveyId } = req.body;
    const result = await Submission.find({
      surveyId,
    });
    // console.log(result);
    if (result.length > 0) {
      res.send({
        status: 1,
        msg: "survey already filled",
      });
    } else {
      res.send({
        status: 0,
        msg: "can fill",
      });
    }
  } catch (e) {
    console.log(e);
  }
};
module.exports = { createSubmission, subMissionCount, submissionStatus };
