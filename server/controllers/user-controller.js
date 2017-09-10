const model = require('../models/user-model')
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(8);

const jwt = require('jsonwebtoken');
require('dotenv').config();
const kunci = process.env.DB_SK;


function createUser(req,res){
  var hash = bcrypt.hashSync(req.body.password, salt);
   model.create({
     name       : req.body.name,
     email      : req.body.email,
     password   : hash,
     role       : req.body.role || 'member',
     created_at : new Date()
   }).then(dataUser => {
     res.send(dataUser)
   }).catch(error => {
     res.send(error)
   })
}

function getAllUser(req,res){
  model.find({}).then(dataUser=>{
    res.send(dataUser)
  }).catch(error=>{
    res.send(error)
  })
}

function getSingleUser(req,res){
  model.findById({'_id':req.params.id})
  .then(dataUser=>{
    res.send(dataUser)
  }).catch(error=>{
    res.send(error)
  })
}

function deleteUser(req,res){
  model.remove({"_id":req.params.id})
  .then(dataUser=>{
    res.send("terhapus")
  }).catch(error=>{
    res.send(error)
  })
}

function updateUser (req,res){

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

function login(req,res){
  model.findOne({email:req.body.email}).then(dataUser => {
    console.log('==>>',dataUser._id);
        if (bcrypt.compareSync(req.body.password, dataUser.password)) {
           let token = jwt.sign({email: dataUser.email, role: dataUser.role, userid: dataUser._id}, kunci, {expiresIn:'1h'})
           console.log('success');
           res.send({user_id: dataUser._id, user_name: dataUser.name, token: token})
      } else {
        console.log('failed');
        res.send('wrong password')
      }
  }).catch(error=>{
    console.log('error');
    res.send(error)
  })
}



module.exports = {
  createUser,
  getAllUser,
  getSingleUser,
  deleteUser,
  login
}
