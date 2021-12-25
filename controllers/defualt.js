const logger = require('../utils/logs');

module.exports = {
    method:(req, res, next) => {
        logger.http(`${req.method}`);
        next();
    },
    errorHandler: (error, req, res, next) => {
        logger.error(`Error - You went into a ${error.status} problem - Please try a diffrent senario , ${error.stack}`);
        return res.status(error.status || 500).json({ message: "Error - You went into a 500 problem - Please try a diffrent senerio" });
    },
    index : (req, res) => {
        logger.info('Hey and welcome to Music Master!');
        return res.status(200).json({ message: 'Hey and welcome to Music Master!' });
    },
   
}

