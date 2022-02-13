const { User, } = require('../../models'),
  { generateAccessToken } = require('../../utils/helper'),
  bcrypt = require('bcryptjs');

const login = async (req, res, next) => {
  try {
    const { email, password } = await req.body,
      user = await User.findOne({ email, }); // fetching user 
    if (user && bcrypt.compareSync(password, user.password)) {
      const accessToken = generateAccessToken(user); // genrrating access token
      user.password = user.accountToken = undefined;

      return res.status(200).json({
        message: 'Login Successfull',
        accessToken,
        expires: 2592000000,
        user
      })
    }
    //  email or password is incoreect
    return res.status(400).json({ message: 'Email or password is incorrect' })
  } catch (error) {
    console.error(error.message);
    return next(error);
  }

}

module.exports = { login }