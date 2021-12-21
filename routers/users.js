const mongoose = require('mongoose');
const { Router } = require('express');
usersRouter = new Router();
const { usersController } = require('../controllers/users');

usersRouter
    .post('/signup', usersController.signup)
    .post('/login', usersController.login);
  
module.exports = { usersRouter };