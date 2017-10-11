var mongoose = require('mongoose')
var Schema = mongoose.Schema

var threadSchema = new Schema({
    user_name : String,
    title     : String,
    question  : String,
    vote      : Number,
    answer_id :  [{ type: Schema.Types.ObjectId, ref: 'Answer' }],
    user_id   :  { type: Schema.Types.ObjectId, ref: 'User' },
    created_at: Date,
    updated_at: Date
});

var Thread = mongoose.model('Thread', threadSchema)
module.exports = Thread;
