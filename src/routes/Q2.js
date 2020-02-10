var express = require("express");
var app = express();
const router = express.Router();
const emailRegex = require('email-regex');

const Student = require('../model/Student')
const Teacher = require('../model/Teacher')
const Register = require('../model/Register')

const { check, query, validationResult } = require('express-validator');

router.get("/commonstudents",
    [
        query('teacher').not().isEmpty(),
        query('teacher').isEmail(),
        query('teacher.*').isEmail(),
    ],

    async (req, res) => {

        const errors = validationResult(req)

        if (errors.isEmpty()) {
            try {

                //prepare query teachers array
                var teachers = [];
                if (Array.isArray(req.query.teacher)) {
                    for (var i = 0; i < req.query.teacher.length; i++) {
                        teachers.push(req.query.teacher[i])
                    }
                } else {
                    teachers.push(req.query.teacher)
                }

                console.log("pushed")
                console.log(JSON.stringify(teachers))

                //loop query array and use query result keep updating the common students result array
                var commonStudents = [];

                for (var i = 0; i < teachers.length; i++) {

                    let oneTeacher_Register = await Register.findAll({ where: { TeacherEmail: teachers[i] }, raw: true, attributes: ['StudentEmail'] }).catch(function (err) {
                        console.log(err)
                    });

                    //prepare selectedStudents array
                    let selectedStudents = [];
                    for (let j = 0; j < oneTeacher_Register.length; j++) {
                        selectedStudents.push(oneTeacher_Register[j].StudentEmail);
                    }

                    if (i == 0) {
                        commonStudents = selectedStudents;
                    } else {
                        commonStudents = commonStudents.filter(function (val) {
                            return selectedStudents.indexOf(val) != -1;
                        });
                    }
                }

                //done
                res.status(200).send({ students: commonStudents })
            }
            catch (err) {
                console.log(err)
                res.status(500).send({ error: err.message })
            }
        }
        else {
            return res.status(422).json({ errors: errors.array() })
        }
    });

module.exports = router;