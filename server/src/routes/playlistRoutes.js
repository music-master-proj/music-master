const router = require('express').Router(),
  playlist = require('../controller/Playlist').playlistController();


router.post('/', playlist.createPlaylist)      // create new playlist
router.get('/list/:userID', playlist.allPlaylists);   // all playlists
router.get('/:playlistID', playlist.playlistById);   // get single playlist through id
router.put('/:playlistID', playlist.updatePlaylist);   // add song in a playlist
router.delete('/:playlistID', playlist.removePlaylist);   // remove playlist by id

module.exports = router