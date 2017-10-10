const Users   = require('../models/user-model')
const Threads = require('../models/thread-model')
// const Answers = require('../models/answer-model')

function creatThread(req,res){
  Threads.create({
    user_id   : req.body.user_id,
    username  : req.body.username,
    title     : req.body.title,
    question  : req.body.question,
    vote      : req.body.vote,
    created_at: new Date()
  }).then(dataThread => {
    console.log('====>>>>',dataThread);
    Users.findById(req.body.user_id)
    .then(dataUser => {
      console.log('xxxxx======>>>',dataUser);
      dataUser.thread_id.push(dataThread._id)
      dataUser.save(function(err){
        if (err) {
          console.log("add thread success!!");
          res.send(dataThread)
        }
      })
    }).catch(error=>{
      res.send(error)
    })
  }).catch(error=>{
    res.send(error)
  })
}

function getAllThread(req,res){
  console.log(req);
  Threads.find({})
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
  Threads.remove({"_id":req.params.id})
  .then(dataThread=>{
    res.send('Terhapus')
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
