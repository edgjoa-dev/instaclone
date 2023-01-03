const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({

    name: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    avatar: {
        type: String,
        trim: true,
    },
    siteWeb: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    password: {
        type: String,
        trim: true,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now(),
    },

});


module.exports = mongoose.model('User', UserSchema)