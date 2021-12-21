const mongoose =  require('mongoose');
const { Schema, model } = require('mongoose');

const PlaylistSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String , require: true },
    artist:  {type: String , require: true },
    yearReleased: { type: Number , require: true , min: 1930, max: 2030},
    duration: {type: Number , require: true, min: 0},
    writer: { type: String ,require: true },
    genre : { type: [String] ,enumValues:["Country", "Electronic dance", "Hip-hop", "Indie rock", "Jazz", "Metal", "Classic rock", "Rap", "Pop", "R&B", "Rock","Latin","reggaeton"], require: true},
    image: {type: String, require: true },
    
}, { collection: 'Playlist' });

const Playlist = model('Playlist', PlaylistSchema );
module.exports = { Playlist };