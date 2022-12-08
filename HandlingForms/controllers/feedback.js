const Feedback = require("../models/feedback");

//Getting all feedback GET ALL
exports.getFeedback = (req, res, next) => {
    try {
        res.status(200).json({
            status: "success",
            message: "API ",
            results: Feedback.length,
            data: {
                Feedback,
            },
        });
    } catch (error) {
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
exports.createFeedback = (req, res) => {
    try {} catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
};

/*const flights = require("./../models/Flight");



// get one flight--get
e



//update flight--patch


//delete flight
exports.deleteFlight = (req, res) => {
    try {
        const flightId = req.params.id;
        flights = flights.filter((flight) => {
            return flight.id !== flightId;
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
}; */