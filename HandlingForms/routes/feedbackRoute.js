const express = require("express");
const feedbackController = require("../controllers/feedbackController");

const router = express.Router();

//Specified routes

router.post("/generatefeedback", feedbackController.createFeedback);
router.get("/feedbacks", feedbackController.getFeeds);
router.get("/getone/:id", feedbackController.getFeedback);
router.patch("/update/:id", feedbackController.updateFeedback);

module.exports = router;
