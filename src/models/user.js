const mongoose = require('mongoose')
const validator = require('validator')
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: false,
        trim: true
    },
    lastname: {
        type: String,
        required: false,
        trim: true
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Not a valid email.')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (value.length < 7) {
                throw new Error('Password should be at least 7 characters.')
            };
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain the phrase "password".')
            }
        }
    },
    seenStatusCollection: [{
        imdbID: {
            type: String,
            required: true
        },
        seenStatus: {
            type: Boolean,
            required: true
        }        
    }],
    userSettings: [{
        viewSet: {
            type: String,
            required: true,
            default: 'all'
        },
        viewStyle: {
            type: String,
            required: true,
            default: 'cards,',
        },
        filmSet: {
            type: String,
            required: true,
            default: 'bfi2012'
        }
    }],
    tokens: [{
        token: {
            type: String,
            // required: true
        }
    }],
    avatar: {
        type: Buffer
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User