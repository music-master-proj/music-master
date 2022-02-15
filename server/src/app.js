require('dotenv').config(); // initializing environment variables
require('./utils/db').mongoDB(); // db connection initializing here 
const express = require('express'),
  logger = require('morgan'),
  helmet = require('helmet'),
  cors = require('cors'),

  /* App Routes initialization */
  userRouter = require('./routes/userRoutes'),
  questionnaireRouter = require('./routes/questionRoutes'),
  playlistRouter = require('./routes/playlistRoutes'),
  calendarRouter = require('./routes/calendarRoutes'),
  indexRouter = require('./routes/index'),
  /* App routes */

  { networkConfig } = require('./bin/www'),
  { errorHandler } = require('./middlewares/errorhandler'),
  app = express(),
  port = process.env.PORT || 4000;


// ------------------------- app configuration starts here ------------------------- //

app.use(
  cors(),
  express.urlencoded({ extended: false }),
  express.json(),
  express.static('utils'),
  express.static('uploads'),
  // helmet for security purpose
  helmet(),
  // morgan middleware
  logger('dev'),
  // enable headers required for a request
  networkConfig,
  // global error handler
  errorHandler,

);

// --------- app routes --------------- //

app.use('/', indexRouter)
app.use('/api/user', userRouter)        // user routes
app.use('/api/questionnaire', questionnaireRouter)        // questionnaire routes
app.use('/api/playlist', playlistRouter)        // playlist routes
app.use('/api/calendar', calendarRouter)        // calendar routes

// ------------------------- app configuration ends here ------------------------- //

app.listen(port, () => {
  console.log(`Server is listening at port ${port} with ${process.env.NODE_ENV} Node Environment`);
})


