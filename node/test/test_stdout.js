var test_req = require('../runTester.js');
var should = require('should');
var examples = require('../testsExamples/example_res200.js');
var response = [];


describe('stdout tester', function () {
    it('should return array with response', function (done) {
        test_req(examples, function (err, res) {
            if (err) return done(err);
            console.log("Res into test stdout: ", res[0].response.stdout);
            console.log("Res into test stderr: ", res[0].response.stderr);
            console.log("Res into test compilerErrors: ", res[0].response.compilerErrors);
            console.log("Res into test stdout: ", res[1].response.stdout);
            console.log("Res into test stderr: ", res[1].response.stderr);
            console.log("Res into test compilerErrors: ", res[1].response.compilerErrors);
            console.log("Res into test stdout: ", res[2].response.stdout);
            console.log("Res into test stderr: ", res[2].response.stderr);
            console.log("Res into test compilerErrors: ", res[2].response.compilerErrors);
            res.should.be.instanceof(Array).and.have.lengthOf(examples.length);
            response = res;
            done();
        });
    });
    it('should equal example response', function () {
        response.forEach(function (res, i) {
            res.should.be.an.instanceOf(Object).and.have.property('code', 200);
            res.should.be.an.instanceOf(Object).and.have.property('response');

            res.response.stdout.forEach(function (result, idx) {
                result.should.equal(examples[i].resBody.response.stdout[idx]);
            });
        })
    });
});