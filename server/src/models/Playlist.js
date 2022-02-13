const mongoose = require('mongoose'),
  mongodbErrorHandler = require('mongoose-mongodb-errors'),
  Schema = mongoose.Schema,
  playlistSchema = new Schema({
    title: { type: String, required: true },
    songs: [{ type: Object, default: {} }, { timestamps: false, versionKey: false, }],
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    status: { type: Number, default: 1 },
  },
    {
      timestamps: true,
      versionKey: false,
    }
  );

playlistSchema.plugin(mongodbErrorHandler);

//role 0 for Admin role 1 for Merchant
module.exports.Playlist = mongoose.model('Playlist', playlistSchema);
