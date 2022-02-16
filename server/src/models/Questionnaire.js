const mongoose = require('mongoose'),
  mongodbErrorHandler = require('mongoose-mongodb-errors'),
  Schema = mongoose.Schema,
  questionnaireSchema = new Schema({
    stuck: { type: String, required: true },
    badass: { type: String, required: true },
    somewhere: { type: String, required: true },
    breaks: { type: String, required: true },
    date: { type: String, required: true },
    shower: { type: String, required: true },
    move: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
  },
    {
      timestamps: true,
      versionKey: false,
    }
  );

questionnaireSchema.plugin(mongodbErrorHandler);

//role 0 for Admin role 1 for Merchant
module.exports.Questionnaire = mongoose.model('Questionnaire', questionnaireSchema);
