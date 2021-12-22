//import {chalk} from 'chalk'
const log = require('log-to-file');
const moment = require('moment');
//const { greenBright, blueBright, redBright, yellowBright, cyanBright, grey } = require('chalk');
require('dotenv').config()
//require('chalk');
function timeStamp() {
    return moment().format('DD/MM/YYYY HH:mm:ss');
}


const logger = {
    info: function (msg) {
        console.log(`${'info:'} ${(timeStamp())} ${msg}`);
    },
    error: function (msg) {
        console.log(`${'error:'} ${(timeStamp())} ${msg}`);
        log("Error : " + msg + '\n', process.env.logFile);
    },
    http: function (msg) {
        console.log(`${'http:'} ${(timeStamp())} ${msg}`);
    },
    warn: function (msg) {
        console.log(`${'warn:'} ${(timeStamp())} ${msg}`);
        log("Warn : " + msg + '\n', process.env.logFile);
    },
    debug: function (msg) {
        console.log(`${'debug:'} ${(timeStamp())} ${msg}`);
    }
};


module.exports = logger;