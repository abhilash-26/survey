const router = require("express").Router();

router.use("/user", require("./userRoute"));

router.use("/survey", require("./surveyRoute"));

router.use("/submission", require("./submissionRoute"));

module.exports = router;
