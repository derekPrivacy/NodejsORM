var express = require("express");
var app = express();
const router = express.Router();
const emailRegex = require('email-regex');

const Student = require('../model/Student')
const Teacher = require('../model/Teacher')
const Register = require('../model/Register')

const { check, validationResult } = require('express-validator');

router.post("/register", [
    check('teacher').not().isEmpty(),
    check('teacher').isEmail(),

    check('students').not().isEmpty(),
    check('students').isArray(),
    check('students.*').isEmail(),
], async (req, res) => {

    const errors = validationResult(req)

    if (errors.isEmpty()) {
        try {

            //make sure student record exist in student table And his suspension flag !=1(suspended student shouldn't get registered)
            var requestStudents = [];

            for (var i = 0; i < req.body.students.length; i++) {
                var oneStudent = await Student.findOne({ where: { Student_Email: req.body.students[i] }, raw: true }).catch(function (err) {
                });

                if (oneStudent == null) {
                    let student = await Student.create({
                        Student_Email: req.body.students[i],
                        Suspension_Flag: 0
                    });

                    requestStudents.push(req.body.students[i])

                } else if (oneStudent.Suspension_Flag != 1) {

                    requestStudents.push(req.body.students[i])

                } else {
                    return res.status(422).json({ errors: `student ${req.body.students[i]} has been suspended` })
                }
            }


            //make sure teacher record exist in teacher table
            var oneTeacher = await Teacher.findOne({ where: { Teacher_Email: req.body.teacher } }).catch(function (err) {
                console.log(err)
            });

            if (oneTeacher == null) {
                let teacher = await Teacher.create({
                    Teacher_Email: req.body.teacher,
                });
            }

            //add teacher and student record into register table If they are not already exist

            for (var i = 0; i < requestStudents.length; i++) {
                let newRegister = await Register.findOrCreate({
                    where: {
                        Teacher_Email: req.body.teacher,
                        Student_Email: requestStudents[i]
                    },
                    defaults: {
                        Teacher_Email: req.body.teacher,
                        Student_Email: requestStudents[i]
                    }
                })
            }

            //done
            res.status(204).send({ message: "registered" })

        }
        catch (err) {
            console.log(err)
            res.status(500).send({ errors: err.message })
        }
    } else {
        return res.status(422).json({ errors: errors.array() })
    }
});

module.exports = router;