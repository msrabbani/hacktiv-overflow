var mongoose = require('mongoose')
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var userSchema = new Schema({
    name     : String,
    email    : String,
    password : String,
    role     : String,
    thread_id:  [{ type: Schema.Types.ObjectId, ref: 'threads' }],
    answer_id:  [{ type: Schema.Types.ObjectId, ref: 'answers' }],
    created_at: Date,
    updated_at: Date
});

var User = mongoose.model('User', userSchema)
module.exports = User;
