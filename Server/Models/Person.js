const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

let User = new Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required']
    },
    lastName: {
        type: String,
        required: [true, 'First name is required']
    },
    userName: {
        type: String,
        required: [true, 'First name is required']
    },
    description: {
        type: String
    },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', User);