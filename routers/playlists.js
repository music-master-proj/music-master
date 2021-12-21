const { Router } = require('express');
playlistsRouter = new Router();
const { playlistsController } = require('../controllers/playlists');

playlistsRouter
    .get('/', playlistsController.getAllPlaylists)
    .get('/:playlistId', playlistsController.getOnePlaylist)
    .post('/', playlistsController.createPlaylist)
    // .post('/', playlistsController)
    .post('/',playlistsController.madeForYouPlaylist)
    .put('/:playlistId', playlistsController.updatePlaylist)
    .delete('/:playlistId', playlistsController.deletePlaylist);

module.exports = { playlistsRouter };