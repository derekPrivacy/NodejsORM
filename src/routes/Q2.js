var express = require("express");
var app = express();
const router = express.Router();
const emailRegex = require('email-regex');

router.get("/commonstudents", () => {
    console.log("hello");
    return "hello";
});

module.exports = router;