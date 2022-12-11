const mongoose = require("mongoose");

//Main Form SChema
const feedbackSchema = new mongoose.Schema({
  feedback: {
    type: String,
    required: [true, "Please Enter Your Feedback"],
  },
  tittle: {
    type: String,
    required: [true, "Feedback Must contain a tittle"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Feedback must belong to a user"],
  },
  photo: {
    type: String,
    default: "default.jpg",
  },
});

const Feed = mongoose.model("Feed", feedbackSchema);
module.exports = Feed;
