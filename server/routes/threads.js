var express = require('express');
var router = express.Router();
var threadCont = require('../controllers/thread-controller')
var auth = require('../controllers/auth-controller')

router.post('/', auth.authUser, threadCont.creatThread)
router.get('/', threadCont.getAllThread)
router.get('/:id', threadCont.getSingleThread)
router.delete('/:id', auth.authUser, threadCont.deleteThread)

module.exports = router;
