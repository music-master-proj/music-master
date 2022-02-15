const { Calendar } = require('../../models')

const userCalendar = async (req, res, next) => {
  try {
    let { userID } = req.params;
    let calendar = await Calendar.findOne({ user: userID }).populate('user', '_id name email mobileNumber role status');
    return res.status(200).json({ data: calendar })
  } catch (error) {
    console.error(error.message);
    return next(error);
  }
}

module.exports = {
  userCalendar,
}