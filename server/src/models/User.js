const mongoose = require('mongoose'),
  mongodbErrorHandler = require('mongoose-mongodb-errors'),
  Schema = mongoose.Schema,
  userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobileNumber: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    accountToken: String,
    image: String,
    role: { type: Number, required: true, default: 1 }, // 0 for admin and 1 for user
    status: { type: Number, default: 0 } // 0 for when questionnaire need to be submitted and 1 for filled questionnaire
  },
    {
      timestamps: true,
      versionKey: false,
    }
  );

userSchema.plugin(mongodbErrorHandler);

//role 0 for Admin role 1 for User
module.exports.User = mongoose.model('User', userSchema);
