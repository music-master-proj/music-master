const { User } = require('../../models'),
  generateAccountToken = require('crypto').randomBytes(64).toString('hex'),
  bcrypt = require('bcryptjs');

// register new user
const newUser = async (req, res, next) => {
  try {
    let { email, password, mobileNumber, } = await req.body,
      validateUser = await User.findOne({
        $or: [
          { email },
          { mobileNumber }
        ]
      });
    // validate
    if (validateUser) return res.status(400).json({ message: 'User already exists' })
    if(!req.file) return res.status(400).json({ message: 'Please upload a picture' })
    let newUser = new User(req.body);
    newUser.accountToken = generateAccountToken // saving token for password reset 
    if (password) newUser.password = bcrypt.hashSync(password, 10); // hash password
    newUser.image = req.file.filename;
    await newUser.save(); // save newUser in MongoDB
    newUser.password = newUser.accountToken = undefined;  // deleting password & accountToken attribute in response
    return res.status(201).json({
      message: 'User Registered Successfully.',
      data: newUser
    })
  } catch (error) {
    console.error(error.message)
    return next(error)
  }

}

module.exports = {
  newUser
}