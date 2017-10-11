var mongoose = require('mongoose')
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var answerSchema = new Schema({
    username    : String,
    answer      : String,
    vote        : Number,
    thread_id   : [{ type: Schema.Types.ObjectId, ref: 'Thread' }],
    user_id     : { type: Schema.Types.ObjectId, ref: 'User' },
    created_at  : Date,
    updated_at  : Date
});

var Answer = mongoose.model('Answer', answerSchema)
module.exports = Answer;
