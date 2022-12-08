const http = require("http");
const mogoose = require("mongoose");
const dotenv = require("dotenv");

const app = require("./app");
const { default: mongoose } = require("mongoose");

dotenv.config({ path: "./config.env" });

mongoose.set("strictQuery", true);
const DB = process.env.DATABASE.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD
);

mongoose
    .connect(DB, {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log("DB Connection Succesful");
    });

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end("Hello, World!\n");
});

server.listen(port, () => {
    console.log(`Server running at ${port}/`);
});