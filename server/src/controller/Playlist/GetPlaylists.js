const { Playlist } = require('../../models')

const playlistById = async (req, res, next) => {
  try {
    let { playlistID } = req.params;
    let playlist = await Playlist.findById(playlistID).populate('user', '_id name email mobileNumber role status');
    return res.status(200).json({ data: playlist })
  } catch (error) {
    console.error(error.message);
    return next(error);
  }
}

const allPlaylists = async (req, res, next) => {
  try {
    let { userID } = req.params;
    let playlist = await Playlist.find({ user: userID }).populate('user', '_id name email mobileNumber role status');
    return res.status(200).json({ data: playlist })
  } catch (error) {
    console.error(error.message);
    return next(error);
  }
}


module.exports = {
  playlistById,
  allPlaylists,
}