//Logic
const mongoose = require('mongoose');
const logger = require('../utils/logs');
const config = require('../utils/config');
const axios = require("axios").default;

let playlist = new Array();
const counter = 0;
let obj = new Object();

const Spotify = async function (req, res) {

    const BeatlesAns = String(req.body.vals.Beatles);
    const ParentsAns = String(req.body.vals.Parents);
    const DateAns = String(req.body.vals.Date);
    const GenereAns = String(req.body.vals.Genere);
    const ComfortAns = String(req.body.vals.Comfort);
    const BreaksAns = String(req.body.vals.Breaks);
    const EngagementsAns = String(req.body.vals.Engagement);
    if (BeatlesAns == "Yes") {
        await GetArtistAlbum("beatles");
    }
    else {
        await GetArtistAlbum("elton john");
    }
    await GetArtistAlbum(ParentsAns);
    await GetArtistAlbum(DateAns);
    await GetArtistAlbum(ComfortAns);
    await GetArtistAlbum(BreaksAns);
    await GetArtistAlbum(EngagementsAns);

    if (GenereAns == "Latin") {
        await GetArtistAlbum("maluma");
    }
    else if (GenereAns == "Rock") {
        await GetArtistAlbum("aerosmith");
    }
    else {
        await GetArtistAlbum("drake");
    }
    console.log(playlist);
    return await res.status(200).json({playlist });

}

async function GetArtistAlbum(name) {
    let options = {
        method: 'GET',
        url: config.ALBUM_API,
        params: { s: name },
        headers: {
            'x-rapidapi-host': config.X_HOST,
            'x-rapidapi-key': config.X_KEY
        }
    };
    await axios.request(options).then(function (response) {
        const data = response.data;
        const numOfAlbums = data.album.length;
        const RandAlubmNum = Math.floor(Math.random() * numOfAlbums);
        const ArtistName = data.album[RandAlubmNum].strArtist;
        const AlbumID = data.album[RandAlubmNum].idAlbum;
        const genre = data.album[RandAlubmNum].strGenre;
        const img = data.album[RandAlubmNum].strAlbumThumb;
        const yearReleased = data.album[RandAlubmNum].intYearReleased;
        const albumName = data.album[RandAlubmNum].strAlbum;
        obj.ArtistName = ArtistName;
        obj.genre = genre;
        obj.img = img;
        obj.yearReleased = yearReleased;
        obj.albumName = albumName;
        GetSongFromAlbum(AlbumID);

    }).catch(function (error) {
        logger.error(error);
    });
}

async function GetSongFromAlbum(AlbumId) {
    let options = {
        method: 'GET',
        url: config.SONG_API,
        params: { m: AlbumId },
        headers: {
            'x-rapidapi-host': config.X_HOST,
            'x-rapidapi-key': config.X_KEY
        }
    };
    await axios.request(options).then(function (response) {
        const data = response.data;
        const numOfAlbums = data.track.length;
        const RandTrackNum = Math.floor(Math.random() * numOfAlbums);
        const songName = data.track[RandTrackNum].strTrack;
        obj.songName = songName;
        const json = JSON.stringify(obj);
        playlist.push(json);
    }).catch(function (error) {
        logger.error(error);
    });
}

module.exports = { Spotify };





