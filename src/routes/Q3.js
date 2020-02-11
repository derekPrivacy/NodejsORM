var express = require("express");
var app = express();
const router = express.Router();
const emailRegex = require('email-regex');

const Student = require('../model/Student')
const Teacher = require('../model/Teacher')
const Register = require('../model/Register')

const { check, validationResult } = require('express-validator');

router.post("/register", [
    // check('teacher').not().isEmpty(),
    // check('teacher').isEmail(),

    check('student').not().isEmpty(),
    // check('student').isArray(),
    check('student').isEmail(),
], async (req, res) => {

    const errors = validationResult(req)

    if (errors.isEmpty()) {
        try {

            //take that student record out from register table 


            //add a suspension flag 1 to the student table

            //done
            res.status(204).send({ message: "suspended" })

        }
        catch (err) {
            console.log(err)
            res.status(500).send({ error: err.message })
        }
    } else {
        return res.status(422).json({ errors: errors.array() })
    }
});

module.exports = router;