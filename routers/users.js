
const express = require('express');
const { getAllUsers, getUser,checkId } = require('../controllers/users');
let router = express.Router();

router.get('/users/', getAllUsers);
router.get('/users/:id', checkId ,getUser)
      //.put('/api/users/:id',checkId ,updateUser)
      //.delete('/api/users/:id', checkId ,deleteUser);

module.exports = router;