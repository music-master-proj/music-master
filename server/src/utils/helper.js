const jwt = require('jsonwebtoken'),
  crypto = require('crypto');


function generateAccessToken({ id }) {
  return jwt.sign({ sub: id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30d' });
}

function generateAccountResetToken() {
  // Create a random reset token
  let token = crypto.randomBytes(64).toString('base64');

  //token expires after one hour
  let expireDate = new Date(Date.now() + 3600000);

  return {
    token: token,
    expireDate: expireDate.toISOString()
  }
}

module.exports = {
  generateAccessToken,
  generateAccountResetToken
}
