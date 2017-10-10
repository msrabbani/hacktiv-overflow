var express = require('express');
var router = express.Router();
var userCont = require('../controllers/user-controller')

router.post('/signin', userCont.signin)
router.post('/signup', userCont.signup)

module.exports = router;
