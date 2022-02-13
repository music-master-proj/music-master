const { User } = require('../../models'),
  bcrypt = require('bcryptjs');

// user update profile
const editProfile = async (req, res, next) => {
  try {
    let { email, password, mobileNumber, newPassword, } = req.body,
      { id } = req.params,
      user = await User.findOne({ $and: [{ $or: [{ email }, { mobileNumber }] }, { _id: { $ne: id } }] });

    if (user) return res.status(400).json({ message: 'User Already exist' })
    user = await User.findOne({ _id: id, status: 1 });
    if (!(user && bcrypt.compareSync(password, user.password)))
      return res.status(400).json({ message: 'Incorrect Password' })
    delete req.body.password, req.body.status, req.body.accountToken, req.body.role;
    if (newPassword) req.body.password = bcrypt.hashSync(newPassword, 10);
    let updUser = await User.findByIdAndUpdate({ _id: id }, req.body)
    if (!updUser) return res.status(400).json({ message: 'Profile cannot be updated. Try again !!!' })
    return res.status(200).json({ message: 'Profile Updated Successfully' })
  } catch (error) {
    console.error(error.message);
    return next(error);
  }
}

// for admin only
const editUser = async (req, res, next) => {
  try {
    let { email, mobileNumber, password, } = req.body,
      { id } = req.params,
      validateUser = await User.findOne({ $and: [{ $or: [{ email }, { mobileNumber }] }, { _id: { $ne: id } }] });
    // validate
    if (validateUser) return res.status(400).json({ message: 'User already exists' })
    delete req.body.password, req.body.accountToken;
    if (password) req.body.password = bcrypt.hashSync(password, 10);
    let updUser = await User.findByIdAndUpdate({ _id: id }, req.body)
    if (!updUser) return res.status(400).json({ message: 'User cannot be updated. Try again !!!' })
    return res.status(200).json({ message: 'User Updated Successfully' })
  } catch (error) {
    console.error(error.message);
    return next(error);
  }
}



module.exports = {
  editProfile,
  editUser
}