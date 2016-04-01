"use strict";
var cp = require('child_process');
var log = require('./modules/logger');

/*
var config = require('./config.json');
*/







var cpOptions = {
    encoding: 'utf8',
    timeout: 0,
    killSignal: 'SIGKILL',
    cwd: '/home/ubuntu/coderunner'
};

var shellExec = function (command, msg, cb) {
    cp.exec(command,  cpOptions, function(error){
        if (error) {
            log.error(msg);
            cb(msg);
        }
    });
    return true;
};

function selfUpdate(callback) {
    if (shellExec("git pull", "SelfUpdate: fail fetch from git repo", callback)) {
        if (shellExec("sudo initctl stop my_coderunner", "SelfUpdate: fail stop coderunner", callback)) {
            if (shellExec("sudo initctl start my_coderunner", "SelfUpdate: fail start coderunner")) {
                callback(null, true);
            }
        }
    }
}


module.exports = selfUpdate;

