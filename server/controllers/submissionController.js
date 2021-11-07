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
module.exports = { createSubmission, subMissionCount };
