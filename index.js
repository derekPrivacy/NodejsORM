const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");

const express = require('express')
const app = express()
const hostname = "127.0.0.1";
const port = 3001;

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

require('./src/connection')


const Q1Router = require("./src/routes/Q1");
app.use("/api", Q1Router);

const Q2Router = require("./src/routes/Q2");
app.use("/api", Q2Router);

const Q3Router = require("./src/routes/Q3");
app.use("/api", Q3Router);

const Q4Router = require("./src/routes/Q4");
app.use("/api", Q4Router);


module.exports = app