var express = require("express");
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../index')
let should = chai.should();

chai.use(chaiHttp);

//For Q3
describe('Suspend a specified student', () => {
    it("testQ3", function () {
        return chai.request(app)
            .post('/api/suspend')
            .send({
                "student": "testStudent1@gmail.com"
            })
            .then(function (res) {
                res.should.have.status(204);
            })
    })
});