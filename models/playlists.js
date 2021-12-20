const { Schema, model } = require('mongoose');

const PlaylistSchema = new Schema({
    id: {
        type: Number,
        required: [true, 'id requierd']
    },
    name: {
        type: String,
        required: [true, 'company filed required']
    },
    description: {
        type: String,
        required: [true, 'destination filed required']
    },
    
    date: {
        type: Date,
        required: [true, 'date required'],
        min: ['2021-01-01', 'Must be greater than: 01/01/2021'],
        max: ['2024-01-01', 'Must be smaller than: 01/01/2025'],
    },

    Image: {
        type: String,
        required: [true, 'destination filed required']
    },
}, { collection: 'Playlist' });

const Playlist = model('Playlist', PlaylistSchema );
module.exports = { Playlist };