var mongoose = require('mongoose')
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var threadSchema = new Schema({
    user_name : String,
    title     : String,
    question  : String,
    vote      : Number,
    answer_id :  { type: Schema.Types.ObjectId, ref: 'answers' },
    user_id   :  { type: Schema.Types.ObjectId, ref: 'users' },
    created_at: Date,
    updated_at: Date
});

var Thread = mongoose.model('Thread', threadSchema)
module.exports = Thread;
