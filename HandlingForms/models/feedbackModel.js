const mongoose = require("mongoose");

//Main Form SChema
const feedbackSchema = new mongoose.Schema({
  feedback: {
    type: String,
    required: [true, "Please Enter Your Feedback"],
  },
});

const Feed = mongoose.model("Feed", feedbackSchema);
module.exports = Feed;
