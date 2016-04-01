var test_req = require('../runTester.js');
var should = require('should');
var examples = require('../testsExamples/example_stdErr.js');
var response = [];


describe('stderr tester', function () {
    it('should return array with response', function (done) {
        test_req(examples, function (err, res) {
            if (err) return done(err);
            console.log("Res into test stderr: ", res);
            res.should.be.instanceof(Array).and.have.lengthOf(examples.length);
            response = res;
            done();
        });
    });
    it('should equal example response', function () {
        response.forEach(function (res) {
            res.should.be.an.instanceOf(Object).and.have.property('code', 200);
            res.should.be.an.instanceOf(Object).and.have.property('response');
            res.response.stderr.length.should.not.equal(0);
        })
    });
});