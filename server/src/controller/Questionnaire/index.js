const { Questionnaire, User } = require('../../models');

const addQuestionnaire = async (req, res, next) => {
  try {
    let addQuestionnaire = new Questionnaire(req.body);
    addQuestionnaire.user = req.params.id;
    let validateUser = await User.findOne({ _id: req.params.id, status: 1 })
    if (validateUser) return res.status(400).json({ message: 'User Interests are already saved.', })

    let updUser = await User.findByIdAndUpdate(req.params.id, { status: 1 })

    if (!updUser) return res.status(400).json({ message: 'Error saving Interests. Please try again!!!.', })
    let saveQts = await addQuestionnaire.save(); // save addQuestionnaire in MongoDB

    if (!saveQts) return res.status(400).json({ message: 'Error saving Interests. Please try again!!!.', })
    return res.status(201).json({ message: 'Added the User Interests Successfully.', })

  } catch (error) {
    console.error(error.message)
    return next(error)
  }
}
const questionnaireByUserID = async (req, res, next) => {
  try {
    let { id } = req.params;
    let user = await Questionnaire.findOne({ user: id,  }).populate('user','_id name email mobileNumber role status createdAt updatedAt');
    return res.status(200).json({ data: user })
  } catch (error) {
    console.error(error.message);
    return next(error);
  }
}
module.exports = {
  addQuestionnaire,
  questionnaireByUserID
}