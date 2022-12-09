const express = require("express");
const feedbackController = require("../controllers/feedbackController");

const router = express.Router();

router.post("/generatefeedback", feedbackController.createFeedback);
router.get("/feedbacks", feedbackController.getFeeds);

module.exports = router;
