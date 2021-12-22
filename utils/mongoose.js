 const mongoose = require('mongoose');
 const logger = require('./logs');
 const config = require('./config' );
 const options = { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, user: config.DB_USER,pass: config.DB_PASS }
 const initConnection = async () => {
     try{
         await mongoose.connect('mongodb+srv://cluster0.elj6s.mongodb.net/myFirstDatabase', options);
         logger.info(`connected to MongoDB online to DB : ${mongoose.connection.db.databaseName}`);
     }
     catch(error){
         logger.error(`Connection FAILD - connection error: ${error}`);
         logger.error(`Server shuting down`);
         process.exit();
     }
 }
    
module.exports = { initConnection }
// const mongoose = require('mongoose');
// const consts = require('./constants');
// const { DB_HOST, DB_USER, DB_PASS } = consts;
// const url = DB_HOST;

// const options = {
//     useNewUrlparser: true,
//     useUnifiedTopology: true,
//     user: DB_USER,
//     pass: DB_PASS
// };

// mongoose
//     .connect(url, options)
//     .then(() => console.log('Connected to MongoDb'))
//     .catch(err => console.log(`Connection error: ${err}`));