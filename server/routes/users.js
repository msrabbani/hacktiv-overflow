var express = require('express');
var router = express.Router();
var userCont = require('../controllers/user-controller')

router.get('/', userCont.getAllUser)
router.get('/:id', userCont.getSingleUser)
router.delete('/:id', userCont.deleteUser)

module.exports = router;
