const { Calendar, } = require('../../models');

const upsertCalendar = async (req, res, next) => {
  try {
    let { user } = req.body;

    Calendar.findOneAndUpdate({ user: user }, req.body, { upsert: true }, function (err) {
      if (err) return res.status(400).json({ message: 'Error changing Calendar. Please try again...!!!', })
      return res.status(201).json({ message: 'Successfully changed Calendar', })
    })

  } catch (error) {
    console.error(error.message)
    return next(error)
  }
}

module.exports = {
  upsertCalendar,
}