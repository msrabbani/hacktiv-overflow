var express = require('express');
var router = express.Router();
var answerCont = require('../controllers/answer-controller')

router.post('/', answerCont.createAnswer)
router.get('/', answerCont.getAllAnswer)
router.get('/:id', answerCont.getSingleAnswer)
router.delete('/:id', answerCont.deleteAnswer)
// router.post('/login', userCont.login)


module.exports = router;
