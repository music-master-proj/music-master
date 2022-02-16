const router = require('express').Router(),
  calendar = require('../controller/Calendar').calendarController();

router.put('/', calendar.upsertCalendar)      // upsert the calendar
router.get('/:userID', calendar.userCalendar);   // get calendar through user id

module.exports = router