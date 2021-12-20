const { Router } = require('express');
playlistsRouter = new Router();
const { playlistsController } = require('../controllers/playlists');

playlistsRouter
    .get('/', playlistsController.getAllPlaylists)
    .get('/:id', playlistsController.getOnePlaylist)
    .post('/', playlistsController.createPlaylist)
    .put('/:id', playlistsController.updatePlaylist)
    .delete('/:id', playlistsController.deletePlaylist);

module.exports = { playlistsRouter };