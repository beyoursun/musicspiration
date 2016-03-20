var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var MuSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: 'Title can not be blank'
    },
    cover: String,
    src: String,
    tags: [String],
    from: String,
    created: {
        type: Date,
        default: Date.now
    },
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

mongoose.model('Mu', MuSchema);