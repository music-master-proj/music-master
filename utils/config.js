const dotenv =  require('dotenv');
dotenv.config();

// enviroment vatiable
const config = {
    DB_HOST: process.env.DB_HOST,
    LOGFILE: process.env.logFile,
    CS: process.env.CS,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    OPTIONS: process.env.options,
    URL_API: process.env.URL_API,
    X_KEY: process.env.xrapidapikey,
    X_HOST: process.env.xrapidapihost,
    MONGOLAB_URI: process.env.MONGOLAB_URI
}


module.exports = config;