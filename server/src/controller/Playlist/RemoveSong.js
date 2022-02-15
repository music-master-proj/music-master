const { Playlist } = require('../../models');

const removeSong = async (req, res, next) => {
  try {
    const { playlistID, songID } = req.params
    let delSong = await Playlist.findOneAndDelete({ _id: playlistID, songs: { _id: songID } })
    if (!delSong) return res.status(400).json({ message: 'Erorr removing Song' })

    return res.status(202).json({ message: 'Song Removed Successfully' })

  } catch (error) {
    console.error(error.message)
    return next(error)
  }
}


module.exports = {
  removeSong
}