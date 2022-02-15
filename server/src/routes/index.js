const router = require('express').Router()

router.get('/api', (req, res, next) => {
  return res.send(`Test Route for Gigi's Playlist`)
})


module.exports = router