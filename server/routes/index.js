const router = require("express").Router();

router.use("/user", require("./userRoute"));
router.use("/survey", require("./surveyRoute"));

module.exports = router;
