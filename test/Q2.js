var express = require("express");
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../index')
let should = chai.should();

chai.use(chaiHttp);


//For Q2
describe('Retrieve a list of students common to a given list of teachers', () => {
    it("testQ2", function () {
        return chai.request(app)
            .get('/api/commonstudents')
            .query({ teacher: 'goodTeacher@gmail.com', teacher: 'badTeacher@gmail.com' })
            .then(function (res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('students');
            })
    })
});