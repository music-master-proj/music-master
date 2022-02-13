const { Playlist } = require('../../models');

const removePlaylist = async (req, res, next) => {
  try {
    const { playlistID } = req.params
    let delPlaylist = await Playlist.findByIdAndDelete({ _id: playlistID })
    if (!delPlaylist) return res.status(400).json({ message: 'Erorr removing Playlist ' })

    return res.status(202).json({ message: 'Playlist Removed Successfully' })

  } catch (error) {
    console.error(error.message)
    return next(error)
  }
}


module.exports = {
  removePlaylist
}