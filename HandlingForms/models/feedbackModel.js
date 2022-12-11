const mongoose = require("mongoose");

//Main Form SChema
const feedbackSchema = new mongoose.Schema({
  user: {
    type: String,
    // required: [true, "Feedback must belong to a user"],
  },

  tittle: {
    type: String,
    required: [true, "Feedback Must contain a tittle"],
  },
  feedback: {
    type: String,
    required: [true, "Please Enter Your Feedback"],
  },

  photo: {
    type: String,
    default: "default.jpg",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Feed = mongoose.model("Feed", feedbackSchema);
module.exports = Feed;
