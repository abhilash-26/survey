const router = require("express").Router();

const {
  createSubmission,
  subMissionCount,
} = require("../controllers/submissionController");

router.post("/submit-survey", createSubmission);

router.post("/submission-count", subMissionCount);

module.exports = router;
