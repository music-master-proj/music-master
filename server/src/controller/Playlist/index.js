const
  { createPlaylist } = require('./NewPlaylist'),
  { allPlaylists, playlistById } = require('./GetPlaylists'),
  { removePlaylist } = require('./RemovePlaylist'),
  { removeSong } = require('./RemoveSong'),
  { updatePlaylist } = require('./UpdatePlaylist');

function playlistController() {

  return {
    createPlaylist,
    allPlaylists,
    playlistById,
    updatePlaylist,
    removePlaylist,
    removeSong,
  }

}

module.exports = { playlistController }
