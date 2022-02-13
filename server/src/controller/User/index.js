const { newUser } = require('./Register'),
  { allUsers, userByID } = require('./GetUsers'),
  { editProfile, editUser } = require('./EditUser'),
  { login } = require('./Login');

function userController() {

  return {
    newUser,
    login,
    allUsers,
    userByID,
    editUser,
    editProfile,
  }

}

module.exports = { userController }
