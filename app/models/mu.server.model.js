var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var MuSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: 'Title can not be blank'
    },
    cover: String,
    type: String,
    src: String,
    tag: String,
    from: String,
    created: {
        type: Date,
        default: Date.now
    },
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    pv: {
        type: Number,
        default: 0
    }
});

mongoose.model('Mu', MuSchema);