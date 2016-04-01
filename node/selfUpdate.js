"use strict";
var cp = require('child_process');
var log = require('../modules/logger');

/*
var config = require('./config.json');
*/







var cpOptions = {
    encoding: 'utf8',
    timeout: 0,
    killSignal: 'SIGKILL',
    cwd: '/home/coderunner'
};

var shellExec = function (command, msg) {
    cp.exec(command,  cpOptions, function(error){
        if (error) {
            log.error(msg);
            return false;
        }
    });
    return true;
};

function selfUpdate() {
    if (shellExec("git pull", "SelfUpdate: fail fetch from git repo")) {
        if (shellExec("sudo initctl stop my_coderunner", "SelfUpdate: fail stop coderunner")) {
            if (shellExec("sudo initctl start my_coderunner", "SelfUpdate: fail start coderunner")) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}


module.exports = selfUpdate;

