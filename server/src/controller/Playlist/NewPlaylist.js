const { Playlist, } = require('../../models');

const createPlaylist = async (req, res, next) => {
  try {
    let createPlaylist = new Playlist(req.body);
    let savePlaylist = await createPlaylist.save(); // save playlist in MongoDB

    if (!savePlaylist) return res.status(400).json({ message: 'Error creating Playlist. Please try again!!!.', })
    return res.status(201).json({ message: 'Successfully created Playlist', })

  } catch (error) {
    console.error(error.message)
    return next(error)
  }
}

module.exports = {
  createPlaylist,
}