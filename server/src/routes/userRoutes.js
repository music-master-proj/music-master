const router = require('express').Router(),
  user = require('../controller/User').userController();
const { uploadImage } = require('../utils/multer');

router.post('/', uploadImage.single('image'), user.newUser)      // create new user  
router.get('/', user.allUsers);   // all users
router.post('/login', user.login);    // login user with email and password
router.get('/:id', user.userByID);   // get single user through id

module.exports = router