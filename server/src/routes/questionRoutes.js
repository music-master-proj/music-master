const router = require('express').Router(),
  { addQuestionnaire, questionnaireByUserID } = require('../controller/Questionnaire');

router.post('/:id', addQuestionnaire);
router.get('/:id', questionnaireByUserID);

module.exports = router