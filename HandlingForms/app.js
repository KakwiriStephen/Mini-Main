const express = require("express");
const feedbackRouter = require("./routes/feedbackRoute");

const app = express();

app.use(express.json());
app.use("/api/feedback", feedbackRouter);

module.exports = app;
