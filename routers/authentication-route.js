const express = require('express');
const router = express.Router();
const {checkEmail, signup, login} = require('../controllers/authentication');

router.post('/authentication/signup/' , checkEmail ,signup);
router.post('/authentication/login/', login);

module.exports = router; 


