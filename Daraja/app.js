const express = require("express");
var unirest = require("unirest");

const app = express();

app.use(express.json());

// cors error
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

// var req = unirest("GET", "https://sandbox.safaricom.co.ke/oauth/v1/generate");

// req.query({
//   grant_type: "client_credentials",
// });

// req.headers({
//   Authorization:
//     "Basic SWZPREdqdkdYM0FjWkFTcTdSa1RWZ2FTSklNY001RGQ6WUp4ZVcxMTZaV0dGNFIzaA==",
// });

// req.end((res) => {
//   if (res.error) throw new Error(res.error);
//   console.log(res.body);
// });

// app.get("/access_token", (req, res) => {
//   //Acces token
//   request({
//     url: "",
//     headers: {},
//   });
// });

module.exports = app;
