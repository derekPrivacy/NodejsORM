/* src/bootstrap.js */
//Export a default function (we use Async/Await)
module.exports = async () => {
    //Require models
    const Teacher = require("./model/Teacher");
    const Student = require("./model/Student");
    const Register = require("./model/Register");

    console.log("okok?")

    const errHandler = err => {
        console.error("Error: ", err);
    };

    //populate teachers
    Teacher.destroy({
        where: {},
        truncate: true
    })
    const teacher = await Teacher.bulkCreate(
        [{
            TeacherEmail: "teacher1@gmail.com"
        }, {
            TeacherEmail: "teacher2@gmail.com"
        }],
    ).catch(errHandler);

    //populate students
    Student.destroy({
        where: {},
        truncate: true
    })
    const student = await Student.bulkCreate(
        [{
            StudentEmail: "student1@gmail.com",
            SuspensionFlag: 0
        }, {
            StudentEmail: "student2@gmail.com",
            SuspensionFlag: 0
        },
        {
            StudentEmail: "student3@gmail.com",
            SuspensionFlag: 0
        }
        ],
    ).catch(errHandler);

};