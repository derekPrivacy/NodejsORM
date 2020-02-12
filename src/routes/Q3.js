var express = require("express");
var app = express();
const router = express.Router();
const emailRegex = require('email-regex');

const Student = require('../model/Student')
const Teacher = require('../model/Teacher')
const Register = require('../model/Register')

const { check, validationResult } = require('express-validator');

router.post("/suspend", [
    check('student').not().isEmpty(),
    check('student').isEmail(),
], async (req, res) => {

    const errors = validationResult(req)

    if (errors.isEmpty()) {
        try {

            //take that student record out from register table 
            console.log(req.body.student)

            let rows = await Register.destroy({
                where: {
                    Student_Email: req.body.student
                }
            })

            //add a suspension flag 1 to the student table
            let update = await Student.update(
                { Suspension_Flag: 1 },
                { where: { Student_Email: req.body.student } }
            )

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