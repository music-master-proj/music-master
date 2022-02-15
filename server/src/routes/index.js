const router = require('express').Router();
const { authenticate } = require('../middlewares/auth')

router.get('/api', (req, res, next) => {
  return res.send(`Test Route for Music Master Playlist`)
})
router.get('/api/authTest', authenticate, (req, res, next) => {
  return res.send(`Authenticated Test Route for Music Master Playlist`)
})

module.exports = router