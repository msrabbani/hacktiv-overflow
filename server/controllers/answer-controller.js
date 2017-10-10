const Users   = require('../models/user-model')
const Threads = require('../models/thread-model')
const Answers = require('../models/answer-model')

function createAnswer(req,res){
   Answers.create({
     username : req.body.username,
     user_id  : req.body.user_id,
     thread_id: req.body.thread_id,
     answer   : req.body.answer,
     vote     : req.body.vote,
     created_at : new Date()
   }).then(dataAnswer => {
     console.log('=>',dataAnswer);
     Threads.findById(dayaAnswer.user_id)
     .then(dataThread => {
       console.log('=>>',dataThread);
       dataThread.answer_id.push(dataAnswer._id);
       dataThread.save(function(err){
         if(err){
           res.send(error.massge)
         }else {
           res.send('add answer success...')
           res.send(dataAnswer)
         }
       })
     }).catch(error=>{
       res.send(error)
     })
   }).catch(error => {
     res.send(error)
   })
}

function getAllAnswer(req,res){
  Answers.find({}).then(dataAnswer=>{
    res.send(dataAnswer)
  }).catch(error=>{
    res.send(error)
  })
}

function getSingleAnswer(req,res){
  Answers.findById({'_id':req.params.id})
  .then(dataAnswer=>{
    res.send(dataAnswer)
  }).catch(error=>{
    res.send(error)
  })
}

function deleteAnswer(req,res){
  Answers.remove({"_id":req.params.id})
  .then(dataAnswer=>{
    res.send("terhapus")
  }).catch(error=>{
    res.send(error)
  })
}

function updateAnswer(req,res){
  Answers.find({
    _id:req.params.id
  }).then(dataAnswer => {
    console.log("ini dataAnswer : ",dataAnswer);
    Answer.update({
      _id:dataAnswer._id
    }, {
      $set: {
        username : req.body.username || dataAnswer.username,
        user_id  : req.body.user_id || dataAnswer.user_id,
        thread_id: req.body.thread_id || dataAnswer.thread_id,
        answer   : req.body.answer || dataAnswer.answer,
        vote     : req.body.vote || dataAnswer.vote,
        created_at : new Date()
      }
    })
  })
}
/*
function updateUser(req, res) {
  let hash;
  if (req.body.password) {
    hash = bcrypt.hashSync(req.body.password, 8);
  }

  Users.find({
    _id: req.params.id
  }, function(err, user) {
    if (!hash) {
      hash = user[0].password
    }
    Users.update({
      _id: user[0]._id
    }, {
      $set: {
        name:       req.body.name || user[0].name,
        email:      req.body.email || user[0]._email,
        password:   hash || user[0].password,
        role:       req.body.role || user[0].role,
        updated_at: new Date()
      }
    }, (err, result) => {
      if (err) return res.send(err.message)
        res.send(result);
    });
  });
}
*/

module.exports = {
  createAnswer,
  getAllAnswer,
  getSingleAnswer,
  deleteAnswer
}
