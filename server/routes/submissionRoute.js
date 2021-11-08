const router = require("express").Router();

const {
  createSubmission,
  subMissionCount,
  submissionStatus,
} = require("../controllers/submissionController");

router.post("/submit-survey", createSubmission);

router.post("/submission-count", subMissionCount);

router.post("/submission-status", submissionStatus);

module.exports = router;
