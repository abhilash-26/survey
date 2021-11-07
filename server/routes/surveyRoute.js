const router = require("express").Router();
const { roleCheck } = require("../utils/middlewares/roleCheck");

const {
  createSurvey,
  getSurvey,
  getAllSurvey,
} = require("../controllers/surveyController");

router.post("/create-survey", roleCheck, createSurvey);

router.post("/get-survey", getSurvey);

router.post("/get-all-survey", getAllSurvey);

module.exports = router;
