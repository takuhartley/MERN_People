const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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