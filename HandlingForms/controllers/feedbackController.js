const Feed = require("../models/feedbackModel");

//Getting all feedbacks
//find method
exports.getFeeds = async (req, res) => {
  try {
    const feedbacks = Feed.find();
    console.log(feedbacks);

    res.status(200).json({
      status: "success",
      results: feedbacks.length,
      data: {
        feedbacks,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Find one feedback
exports.getFeedback = (req, res) => {
  try {
    const feedbackId = req.params.id;
    const feedback = Feedback.find((feedback) => {
      return feedback.id === Number(feedbackId);
    });
    res.status(200).json({
      status: "success",

      data: {
        feedback: feedback,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

//create a Feedback- POST
//Create returns a promise that has to be await
exports.createFeedback = async (req, res) => {
  const newFeedback = await Feed.create(req.body);
  try {
    res.status(201).json({
      status: "success",
      data: {
        feedback: newFeedback,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

//Update Feedback PATCH
exports.updateFeedback = (req, res) => {
  try {
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

//delete Feedback
exports.deleteFeedback = (req, res) => {
  try {
    const feedback = req.params.id;
    feedback = Feedback.filter((feedback) => {
      return feedback.id !== feedbackId;
    });

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
