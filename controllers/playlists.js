//Logic
const mongoose =  require('mongoose');
const { Playlists, Playlist } = require('../models/playlists');
const { getPlaylist } = require('../api/audioApi');


exports.playlistsController = {
    getAllPlaylists : (req, res) => {
        Playlist.find().then((Playlists) => {
            res.status(200).json({
                message:'Get all playlists'
            }).catch(error =>{
                res.status(500).json({
                    error
                })
            });
        })
        
    },

    getOnePlaylist : (req, res) => {
       
    },

    createPlaylist : (req, res) => {
        const { name, description, date, Image} = req.body;
        const playlist = new Playlist({
            id: new mongoose.Types.ObjectId(), //this line create string  of playlist
            name,
            description,
            date,
            Image
        });

        Playlist.save().then(()=> {
            res.status(200).json({
                message:'Create a new playlist'
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });
        
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