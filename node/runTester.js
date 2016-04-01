'use strict';

var Promise = require('bluebird');
var request = Promise.promisify(require('request'));
var uri = "http://163.172.128.212:5555/isolated-test";


 var response = function (test, callback) {
     test = test.map(function (req) {
         return {method: 'POST', uri: uri, json: req.req};
     });

    Promise.all( test.map(sendRequest) )
        .then((results)=> {
           // console.log('request results: ', results);
            callback(undefined, results);

        })
        .catch((error)=> {
            callback(error);
        });
};

function sendRequest(data) {

    return  Promise.resolve(request(data)).then(function (incomingMsg) {
        if (incomingMsg.error) {
            throw new Error(incomingMsg.error);
        } else {
            return incomingMsg.body;
        }
    });

}
module.exports = response;
