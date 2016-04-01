var should = require('should');
var examples = require('../testsExamples/example_res200.js');
var response = examples[0].resBody;

describe('simple tester', function () {
    it('should equal example response', function () {
        response.should.be.an.instanceOf(Object).and.have.property('code', 200);
    })
});