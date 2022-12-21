const express = require("express");
const path = require("path");
// const categoryRouter = require("./routes/categoryRoutes");

const app = express();

app.use(express.json());

// Handling  cors error
app.use((req, res, next) => {
  res.header("Access-Controll-Allow-Origin", "*");
  res.header(
    "Access-Controll-Allow-Headers",
    "Origin,X-Requsted-With,Content-Type,Accept,Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE,GET");
    return res.status(200).json({});
  }
  next();
});

// app.use("/category", categoryRouter);

module.exports = app;
