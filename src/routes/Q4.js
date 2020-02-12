var express = require("express");
var app = express();
const router = express.Router();
const emailRegex = require('email-regex');

const Student = require('../model/Student')
const Teacher = require('../model/Teacher')
const Register = require('../model/Register')

const { check, validationResult } = require('express-validator');

router.post("/retrievefornotifications", [
    check('teacher').not().isEmpty(),
    check('teacher').isEmail(),
    check('notification').not().isEmpty(),
    check('notification').isLength({ min: 1 })
], async (req, res) => {

    const errors = validationResult(req)

    if (errors.isEmpty()) {
        try {

            //select all the students registered under that teacher
            var registeredStudents = [];

            console.log(req.body.teacher)
            var foundStudents = await Register.findAll({ where: { Teacher_Email: req.body.teacher }, raw: true, attributes: ['Student_Email'] }).catch(function (err) {
                console.log(err)
            });

            for (var i = 0; i < foundStudents.length; i++) {
                registeredStudents.push(foundStudents[i].Student_Email)
            }

            //extract all the student email from notification text And make sure it's valid student email And Suspension_Flag!=1
            var notificationEmail = req.body.notification.match(emailRegex())

            var notifiedStudents = [];

            for (var i = 0; notificationEmail != null && i < notificationEmail.length; i++) {

                var oneStudent = await Student.findOne({ where: { Student_Email: notificationEmail[i] }, raw: true }).catch(function (err) {
                });

                if (oneStudent != null && oneStudent.Suspension_Flag != 1) {
                    notifiedStudents.push(oneStudent.Student_Email)
                }
            }

            //merge those two parts and remove duplicate
            var mergeResult = [...registeredStudents, ...notifiedStudents];

            var uniqueSet = new Set(mergeResult)

            var resultArray = [];

            resultArray = [...uniqueSet]

            res.status(200).send({ recipients: resultArray })
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