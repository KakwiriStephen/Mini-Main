const Feed = require("../models/feedbackModel");

//Getting all feedbacks
//find method
exports.getFeeds = async (req, res) => {
  Feed.find({}, function (err, feedbacks) {
    if (err) {
      res.status(401).json({
        status: "fail",
        message: err,
      });
    }

    res.status(200).json({
      status: "success",
      results: feedbacks.length,
      data: {
        feedbacks,
      },
    });
  });
};

// Find one feedback
// GET route
exports.getFeedback = async (req, res) => {
  try {
    // const feedbackId = req.params.id;
    // const feedback = await Feed.findById((feedback) => {
    //   return feedback.id === Number(feedbackId);
    // });
    const feedback = await Feed.findById(req.params.id);

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
exports.updateFeedback = async (req, res) => {
  try {
    const feedback = await Feed.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        feedback,
      },
    });
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
    feedback = Feed.filter((feedback) => {
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
