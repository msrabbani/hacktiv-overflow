const Users   = require('../models/user-model')
const Threads = require('../models/thread-model')
// const Answers = require('../models/answer-model')

function creatThread(req,res){
  console.log('==ini req==>',req.dataUser);
  Threads.create({
    user_id   : req.dataUser.userid,
    username  : req.body.username,
    title     : req.body.title,
    question  : req.body.question,
    vote      : req.body.vote,
    created_at: new Date()
  }).then(dataThread => {
    // console.log('====>>>>',dataThread)
    res.send(dataThread)
    }).catch(error=>{
    res.send(error)
  })
}

function getAllThread(req,res){
  // console.log(req);
  Threads.find({}).populate('user_id')
  .then(dataThread => {
    res.send(dataThread)
  }).catch(error => {
    res.send(error)
  })
}

function getSingleThread(req,res){
  Threads.findById({"_id":req.params.id})
  .then(dataThread=>{
    res.send(dataThread)
    .catch(error=>{
      res.send(error)
    })
  })
}

function deleteThread(req,res){
  Threads.remove({"userid._id":req.dataUser.userid})
  .then(dataThread=>{
    res.send('Terhapus!!')
  }).catch(error=>{
    res.send(error)
  })
}
//yang belum editThread

module.exports = {
  creatThread,
  getAllThread,
  getSingleThread,
  deleteThread
}
