const router = require('express').Router(),
  user = require('../controller/User').userController();
const { uploadImage } = require('../utils/multer');

// router.post('/', user.register)      // sign up as a merchant
router.post('/', uploadImage.single('image'), user.newUser)      // create new user admin / merchant
router.get('/', user.allUsers);   // all user
router.put('/profile/:id', user.editProfile);   // edit any profile by providing old password
router.post('/login', user.login);    // login user with email and password
router.get('/:id', user.userByID);   // get single user through id
router.put('/:id', user.editUser);   // edit any user merchant or admin

module.exports = router