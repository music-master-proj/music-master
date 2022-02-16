const mongoose = require('mongoose'),
  mongodbErrorHandler = require('mongoose-mongodb-errors'),
  Schema = mongoose.Schema,
  calendarSchema = new Schema({
    monday: { type: String, default: '', },
    tuesday: { type: String, default: '', },
    wednesday: { type: String, default: '', },
    thursday: { type: String, default: '', },
    friday: { type: String, default: '', },
    saturday: { type: String, default: '', },
    sunday: { type: String, default: '', },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
    {
      timestamps: true,
      versionKey: false,
    }
  );

calendarSchema.plugin(mongodbErrorHandler);

module.exports.Calendar = mongoose.model('Calendar', calendarSchema);
