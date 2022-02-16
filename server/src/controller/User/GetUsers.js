const { User } = require('../../models');

// get single user controller
const userByID = async (req, res, next) => {
  try {
    let { id } = req.params;
    let user = await User.findOne({ _id: id, }, `_id name email mobileNumber gender role status image createdAt updatedAt`);
    return res.status(200).json({ data: user })
  } catch (error) {
    console.error(error.message);
    return next(error);
  }
}


// all users for admin only
const allUsers = async (req, res, next) => {
  try {
    let users = await User.find({}, `_id name email mobileNumber gender role status image createdAt updatedAt`); // all users admin/merchant
    return res.status(200).json({ data: users })
  } catch (error) {
    console.error(error.message);
    return next(error);
  }
}

module.exports = {
  allUsers,
  userByID,
}