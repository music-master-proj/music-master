//Logic
const { Playlist } = require('../models/playlists');


exports.playlistsController = {
    getAllPlaylists : (req, res) => {
        res.status(200).json({
            message:'Get all playlists'
        })
    },

    getOnePlaylist : (req, res) => {
        res.status(200).json({
            message:'Get all playlists'
        })
    },

    createPlaylist : (req, res) => {
        res.status(200).json({
            message:'Create a new playlist'
        })
    },

    updatePlaylist : (req, res) => {
        const playlistId = req.params.articleId
        res.status(200).json({
            message:`Update playlist = ${playlistId}` 
        })
    },

    deletePlaylist : (req, res) => {
        const playlistId = req.params.articleId
        res.status(200).json({
            message:`Delete playlist = ${playlistId}` 
        })
    }
}