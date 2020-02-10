const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");

const express = require('express')
const app = express()
const port = 3000

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use(bodyParser.json());
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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

require('./src/connection')
// require('./src/bootstrap')()

const Teacher = require("./src/model/Teacher");
const Student = require("./src/model/Student");
const Register = require("./src/model/Register");

const Q1Router = require("./src/routes/Q1");
app.use("/api", Q1Router);

const Q2Router = require("./src/routes/Q2");
app.use("/api", Q2Router);

const Q3Router = require("./src/routes/Q3");
app.use("/api", Q3Router);

const Q4Router = require("./src/routes/Q4");
app.use("/api", Q4Router);
