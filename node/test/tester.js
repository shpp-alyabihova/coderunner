/*
var test_req = require('../runTester.js');
var should = require('should');
var examples = require('../testsExamples/example_stdErr.js');


describe('stderr tester', function () {
    it('should return array with response', function (done) {
        test_req(examples, function (err, response) {
            if (err) return done(err);
            response.should.be.instanceof(Array).and.have.lengthOf(examples.length);
            it('should equal example response', function () {
                response.forEach(function (res, i) {
                    res.should.be.an.instanceOf(Object).and.have.property('code', 200);
                    res.should.be.an.instanceOf(Object).and.have.property('response');
                    if(res.response.stderr.length) {
                        console.log("stderr => test complete");
                    }  else {
                        console.log("stderr => test fail")
                    }
                    // res.response.stderr.should.not.be.empty;
                })
            });
            done();
        });
    });
    it('should equal example response', function () {

        for (var response in responses) {
            console.log("response: ", response);

          //  it(response, function () {
                console.log("into third it");

                responses[response].forEach(function (res, i) {
                    console.log("res: ", res);
                    console.log("res: " + res);
                    if (response == "error") {

                        res.should.be.an.instanceOf(Object).and.have.property('error');
                        res[response].should.be.an.instanceOf(Object).and.have.property('code', 'message');
                        console.log(response + " => test complete");

                    } else {
                        res.should.be.an.instanceOf(Object).and.have.property('code');
                        res.should.be.an.instanceOf(Object).and.have.property('response');
                        if (response == "compilerErrors") {
                            res.should.be.an.instanceOf(Object).and.have.property('code', 200);

                            if (res.response[response]) {
                                res.should.be.an.instanceOf(Object).and.have.property('code', 200);

                                console.log(response + " => test complete");
                            }  else {
                                console.log(response + " => test fail")
                            }
                            //res.response[response].should(null).not.be.ok();
                        } else if (response == "stderr") {
                            res.should.be.an.instanceOf(Object).and.have.property('code', 200);

                            if(res.response[response].length) {
                                console.log(response + " => test complete");
                            }  else {
                                console.log(response + " => test fail")
                            }
                           // res.response[response].should.not.be.empty;
                        } else if (response == "stdout") {
                            res.should.be.an.instanceOf(Object).and.have.property('code', 200);


                            res.response[response].forEach(function (result, idx) {
                                if (result == (examples[response][i].resBody.response[response][idx])){
                                    console.log(response + " => test complete");
                                } else {
                                    console.log(response + " => test fail")
                                }
                                //result.should.equal(examples[response][i]["response"][response][idx]);
                            });
                        } else {
                            res.should.be.an.instanceOf(Object).and.have.property('code', 422);
                            res.response.should.be.instanceof(Array).and.have.lengthOf(examples[response][i]["response"].length);
                            console.log(response + " => test complete");
                        }
                    }
                })
         //   })
        }

    })

});
*/
