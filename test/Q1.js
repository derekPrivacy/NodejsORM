var express = require("express");
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../index')
let should = chai.should();

chai.use(chaiHttp);

//For Q1
describe('Register teacher and one or more students', () => {
    it("testQ1", function () {
        return chai.request(app)
            .post('/api/register')
            .type('form')
            .send({
                "teacher": "testTeacher@gmail.com",
                "students": ["testStudent1@gmail.com", "testStudent2@gmail.com"]
            })
            .then(function (res) {
                console.log("hehe" + JSON.stringify(res))
                res.should.have.status(204);
            })
    })
});