const express = require('express');
const router = express.Router();
const { index,  errorHandler, method } = require('../controllers/defualt');

router.use(method);
router.get('/', index);
router.use(errorHandler);

module.exports = router; 


