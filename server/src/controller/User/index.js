const { newUser } = require('./Register'),
  { allUsers, userByID } = require('./GetUsers'),
  { login } = require('./Login');

function userController() {

  return {
    newUser,
    login,
    allUsers,
    userByID,
  }

}

module.exports = { userController }
