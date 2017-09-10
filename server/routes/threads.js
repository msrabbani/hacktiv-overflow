var express = require('express');
var router = express.Router();
var threadCont = require('../controllers/thread-controller')

router.post('/', threadCont.creatThread)
router.get('/', threadCont.getAllThread)
router.get('/:id', threadCont.getSingleThread)
router.delete('/:id', threadCont.deleteThread)
// router.post('/login', userCont.login)

module.exports = router;
