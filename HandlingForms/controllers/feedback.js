const Feedback = require("../models/feedback");

//Find a feedback GET

exports.getFeedback = (req, res, next) {
    Feedback.find().then(feedback => {
            res.json(feedback)
        })
        .catch(err => next(err));
};