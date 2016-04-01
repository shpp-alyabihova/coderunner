var test_req = require('../runTester.js');
var should = require('should');
var examples = require('../testsExamples/example_resError.js');
var response = [];


describe('errors tester', function () {
    it('should return array with response', function (done) {
        test_req(examples, function (err, res) {
            if (err) return done(err);
            console.log("Res into test errors: ", res);
            res.should.be.instanceof(Array).and.have.lengthOf(examples.length);
            response = res;
            done();
        });
    });
    it('should equal example response', function () {
        response.forEach(function (res, i) {
            res.should.be.an.instanceOf(Object).and.have.property('error');
            res.error.should.be.an.instanceOf(Object).and.have.property('code', examples[i].resBody.error.code);
        })
    });
});