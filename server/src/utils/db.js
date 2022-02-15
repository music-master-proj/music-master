const mongoose = require('mongoose');

function mongoDB() {

  const dbUri = process.env.MONGODB_URI,
    connectionOptions = {
      // useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
    };
  // ------------------------- Database Connection ------------------------- //
  //Set up default mongoose connection
  mongoose.connect(dbUri, connectionOptions);

  //Get the default connection
  const dbCon = mongoose.connection;
  //Bind connection to error event (to get notification of connection errors)
  dbCon.on('error', console.error.bind(console, 'MongoDB Connection Error>> : '));

  dbCon.once('open', () => console.log('MongoDB Connection Ok!!!'));

  return dbCon;
  // ------------------------- Database connection ends here ------------------------- //
}

module.exports = { mongoDB };