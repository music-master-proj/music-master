const express = require('express');
const router = express.Router();
const { Spotify} = require('../controllers/playlists');

router.post('/playlist/spotify/', Spotify);


module.exports = router;