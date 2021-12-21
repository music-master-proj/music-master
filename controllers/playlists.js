//Logic
const mongoose = require('mongoose');
const constants = require('../constants');
const {
    Playlist
} = require('../models/playlists');



exports.playlistsController = {
    getAllPlaylists: (req, res) => {
        Playlist.find().then((Playlist) => {
            res.status(200).json({
                Playlist
            }).catch(error => {
                res.status(500).json({
                    error
                })
            });
        })
    },

    getOnePlaylist: (req, res) => {
        const playlistId = req.params.playlistId;

        Playlist.findById(playlistId).then((Playlist) => {
            res.status(200).json({
                Playlist
            }).catch(error => {
                res.status(500).json({
                    error
                })
            });
        })
    },

    createPlaylist: (req, res) => {
        const {
            name,
            artist,
            yearReleased,
            duration,
            writer,
            genre,
            image
        } = req.body;
        const playlist = new Playlist({
            _id: new mongoose.Types.ObjectId(), //this line create string  of playlist
            name,
            artist,
            yearReleased,
            duration,
            writer,
            genre,
            image
        });

            const name = req.body.name;
             let options = {
                method: 'GET',
                url: `${config.URL_ID}/${name}`,
            headers: {
                'x-rapidapi-key': constants.X_KEY,
                'x-rapidapi-host': constants.X_HOST
            }

        playlist.save().then(() => {
            res.status(200).json({
                message: 'Create a new playlist'
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });

    },

    updatePlaylist: (req, res) => {
        const playlistId = req.params.playlistId

        Playlist.update({
            _id: playlistId
        }, req.body).then(() => {
            res.status(200).json({
                message: 'Playlist Updated'
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });


        res.status(200).json({
            message: `Update playlist - ${playlistId}`
        })
    },

    deletePlaylist: (req, res) => {
        const playlistId = req.params.playlistId
        playlist.remove({
            _id: playlistId
        }).then(() => {
            res.status(200).json({
                message: `Playlist id: ${ playlistId } deleted`
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });


    },

    // audioApi:( req, res) => {
    //     let check;
    //     const name = req.body.name;
    //     let options = {
    //         method: 'GET',
    //         url: `${config.URL_ID}/${name}`,
    //     headers: {
    //         'x-rapidapi-key': constants.X_KEY,
    //         'x-rapidapi-host': constants.X_HOST
    //     }
    //     };
    //     await axios.request(options).then(function(response) {
    //         const data = response.data;
    //         const id = data.titles[0].id;
    //         test = id;
    //     }).catch(function(error){
    //         console.log(error);
    //     });
    //     let options2 = {
    //         method: 'GET',
    //         url: `${config.URL_FILM}/${check}`,
    //         headers: {
    //             'x-rapidapi-key': constants.X_KEY,
    //             'x-rapidapi-host': constants.X_HOST
    //         }
    //     };
    //     await axios.request(options2).then(function(response) {
    //         const data = response.data;
    //         return res.status(200).json({ data });
    //     }).catch(function(error) {
           
    //     });
      
    // },


    madeForYouPlaylist: (req, res) => {

        const playlist = Playlist.find();
        const playlistBySurvey = [];
        let counter = 0;

//names of client - qus
        const typeOfQuestion = {
            beatles: req.body.beatles,
            parents: req.body.parents,
            date: req.body.date,
            genre: req.body.genre,
            breaksUp: req.body.breaksUp,
            engagement: req.body.engagement
        };

        const beatles = String(typeOfQuestion.beatles);
        const parents = String(typeOfQuestion.parents);
        const date = String(typeOfQuestion.date);
        const genre = String(typeOfQuestion.genre);
        const breaksUp = String(typeOfQuestion.breaksUp);
        const engagement = String(typeOfQuestion.engagement);

        //Bring random album and then track of Sci-Fi
        //1
        if (beatles == "Yes") {
            const beatlesTracks = [];
            counter++;
            playlist.forEach(playlist => {
                playlist.genre.forEach(genre => {
                    if (genre.includes("Sci-Fi")) {
                        beatlesTracks.push({
                            "id": playlist.id,
                            "name": playlist.name,
                            "artist": playlist.artist,
                            "yearReleased": playlist.yearReleased,
                            "writer": movie.writer,
                            "genre": playlist.writer
                        });
                        playlistBySurvey.push({
                            "id": playlist.id,
                            "name": playlist.name,
                            "artist": playlist.artist,
                            "yearReleased": playlist.yearReleased,
                            "writer": movie.writer,
                            "writer": playlist.writer,
                            "genre": playlist.director
                        });
                    }
                });
            });
        } else {
            const favList = [];
            playlist.forEach(playlist => {
                playlist.genre.forEach(genre => {
                    if (genre.includes(favList)) {
                        favList.push({
                            "id": playlist.id,
                            "name": playlist.name,
                            "artist": playlist.artist,
                            "yearReleased": playlist.yearReleased,
                            "writer": movie.writer,
                            "writer": playlist.writer,
                            "genre": playlist.director
                        });
                    }
                });
            });
            const item = favList[Math.floor(Math.random() * favList.length)];
            return res.status(200).json({
                item
            });

        }

        // 2
        if (parents == "Jennifer lopez" || "Kanye West" || "Justin Timberlake "){
            const parentsTracks = [];
            counter++;
            playlist.forEach(playlist => {
                playlist.genre.forEach(genre => {
                    if (genre.includes("Sci-Fi")) {
                        parentsTracks.push({
                            "id": playlist.id,
                            "name": playlist.name,
                            "artist": playlist.artist,
                            "yearReleased": playlist.yearReleased,
                            "writer": movie.writer,
                            "genre": playlist.writer
                        });
                        playlistBySurvey.push({
                            "id": playlist.id,
                            "name": playlist.name,
                            "artist": playlist.artist,
                            "yearReleased": playlist.yearReleased,
                            "writer": movie.writer,
                            "writer": playlist.writer,
                            "genre": playlist.director
                        });
                    }
                });
            });
        } else { const favList = [];
            playlist.forEach(playlist => {
                playlist.genre.forEach(genre => {
                    if (genre.includes(favList)) {
                        favList.push({
                            "id": playlist.id,
                            "name": playlist.name,
                            "artist": playlist.artist,
                            "yearReleased": playlist.yearReleased,
                            "writer": movie.writer,
                            "writer": playlist.writer,
                            "genre": playlist.director
                        });
                    }
                });
            });
            const item = favList[Math.floor(Math.random() * favList.length)];
            return res.status(200).json({
                item
            });
        }
        //3
       if(date == "Enrique Iglesias" || "Axl Rose" || "Bob Marley "){
        const dateTracks = [];
        counter++;
        playlist.forEach(playlist => {
            playlist.genre.forEach(genre => {
                if (genre.includes("Sci-Fi")) {
                    parentsTracks.push({
                        "id": playlist.id,
                        "name": playlist.name,
                        "artist": playlist.artist,
                        "yearReleased": playlist.yearReleased,
                        "writer": movie.writer,
                        "genre": playlist.writer
                    });
                    playlistBySurvey.push({
                        "id": playlist.id,
                        "name": playlist.name,
                        "artist": playlist.artist,
                        "yearReleased": playlist.yearReleased,
                        "writer": movie.writer,
                        "writer": playlist.writer,
                        "genre": playlist.director
                    });
                }
            });
        });
    } else { const favList = [];
        playlist.forEach(playlist => {
            playlist.genre.forEach(genre => {
                if (genre.includes(favList)) {
                    favList.push({
                        "id": playlist.id,
                        "name": playlist.name,
                        "artist": playlist.artist,
                        "yearReleased": playlist.yearReleased,
                        "writer": movie.writer,
                        "writer": playlist.writer,
                        "genre": playlist.director
                    });
                }
            });
        });
        const item = favList[Math.floor(Math.random() * favList.length)];
        return res.status(200).json({
            item
        });
    }
        //4
        if (genre == "Latin" || "Rock" || "Hip Hop"){
            const genreTracks = [];
            counter++;
            playlist.forEach(playlist => {
                playlist.genre.forEach(genre => {
                    if (genre.includes("Sci-Fi")) {
                        genreTracks.push({
                            "id": playlist.id,
                            "name": playlist.name,
                            "artist": playlist.artist,
                            "yearReleased": playlist.yearReleased,
                            "writer": movie.writer,
                            "genre": playlist.writer
                        });
                        playlistBySurvey.push({
                            "id": playlist.id,
                            "name": playlist.name,
                            "artist": playlist.artist,
                            "yearReleased": playlist.yearReleased,
                            "writer": movie.writer,
                            "writer": playlist.writer,
                            "genre": playlist.director
                        });
                    }
                });
            });
        } else { const favList = [];
            playlist.forEach(playlist => {
                playlist.genre.forEach(genre => {
                    if (genre.includes(favList)) {
                        favList.push({
                            "id": playlist.id,
                            "name": playlist.name,
                            "artist": playlist.artist,
                            "yearReleased": playlist.yearReleased,
                            "writer": movie.writer,
                            "writer": playlist.writer,
                            "genre": playlist.director
                        });
                    }
                });
            });
            const item = favList[Math.floor(Math.random() * favList.length)];
            return res.status(200).json({
                item
            });
        }
        //5
        if (breaksUp == "Amy Winehouse -Back to Black" || "Sam Smith - I'm Not The Only One" || "Beyoncé -Irreplaceable "){

        }
        //6
        if (engagement == "Ed Sheeran" || "Ricky Martin" || "Aerosmith"){

        }
       }
      


    }
   
