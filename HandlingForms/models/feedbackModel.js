const moongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true,
    },

    rating: {
        type: Number,
        required: true,
    },

    timestamp: {
        type: Date,
        default: Date.now,
    },
});

module.exports = moongoose.model("Feedback", feedbackSchema);