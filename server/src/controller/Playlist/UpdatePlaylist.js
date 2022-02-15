const { Playlist } = require('../../models');

const updatePlaylist = async (req, res, next) => {
  try {
    const { playlistID } = req.params,
      { songs } = req.body;

    let updPlaylist = await Playlist.findOneAndReplace({ _id: playlistID }, req.body)
    if (!updPlaylist) return res.status(400).json({ message: 'No playlist found. Error Updating!!!' })

    return res.status(200).json({ message: 'Successfully Updated Playlist ' })

  } catch (error) {
    console.error(error.message)
    return next(error)
  }
}


module.exports = {
  updatePlaylist
}