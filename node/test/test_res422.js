var test_req = require('../runTester.js');
var should = require('should');
var examples = require('../testsExamples/example_res422.js');
var response = [];


describe('validators tester', function () {
    it('should return array with response', function (done) {
        test_req(examples, function (err, res) {
            if (err) return done(err);
            console.log("Res into test 422: ", res);
            res.should.be.instanceof(Array).and.have.lengthOf(examples.length);
            response = res;
            done();
        });
    });
    it('should equal example response', function () {
        response.forEach(function (res, i) {
            res.should.be.an.instanceOf(Object).and.have.property('code', 422);
            res.should.be.an.instanceOf(Object).and.have.property('response');

            res.response.forEach(function (result, idx) {
                result.should.be.an.instanceOf(Object).and.have.property('danger-level', examples[i].resBody.response[idx]['danger-level']);
            });
        })
    });
});