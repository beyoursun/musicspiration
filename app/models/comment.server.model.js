var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var CommentSchema = new Schema({
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    created: {
        type: Date,
        default: Date.now
    },
    content: {
        type: String,
        default: '',
        trim: true
    },
    mu: {
        type: Schema.ObjectId,
        ref: 'Mu'
    }
});

mongoose.model('Comment', CommentSchema);