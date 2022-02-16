const
  { upsertCalendar } = require('./NewCalendar'),
  { userCalendar } = require('./GetCalendar');

function calendarController() {

  return {
    upsertCalendar,
    userCalendar,
  }

}

module.exports = { calendarController }
