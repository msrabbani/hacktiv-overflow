var express = require('express');
var router = express.Router();
var userCont = require('../controllers/user-controller')

router.post('/', userCont.createUser)
router.get('/', userCont.getAllUser)
router.get('/:id', userCont.getSingleUser)
router.delete('/:id', userCont.deleteUser)
router.post('/login', userCont.login)


module.exports = router;
