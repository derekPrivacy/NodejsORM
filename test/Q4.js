var express = require("express");
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../index')
let should = chai.should();

chai.use(chaiHttp);

//For Q4
describe('Send a notification and showing the list of recipients', () => {
    it("testQ4", function () {
        return chai.request(app)
            .post('/api/retrievefornotifications')
            .send({
                "teacher": "goodTeacher@gmail.com",
                "notification": "Hello Students! @testStudent1@gmail.com@testStudent2@gmail.com"
            })
            .then(function (res) {
                console.log("hehe" + JSON.stringify(res.body))
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('recipients');
            })
    })
});