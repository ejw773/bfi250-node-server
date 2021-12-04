const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const ViewStatus = require('./seenStatus')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
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
    filmSet: {
        type: String,
        required: true,
        default: 'bfi2012'
    },
    admin: {
        type: Boolean,
        required: true,
        default: false
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
}, {
    timestamps: true
})

userSchema.virtual('seenStatus', {
    ref: 'ViewStatus',
    localField: '_id',
    foreignField: 'owner'
})

// Remove some user info before sending back to browser
userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens
    delete userObject.avatar
    delete userObject.admin
    delete userObject.createdAt
    delete userObject.updatedAt

    return userObject
}

// Create JSON Web Token
// Note: Methods are for use on the instance (user)
userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET, { expiresIn: '7 days' })
    user.tokens = user.tokens.concat({ token })
    await user.save()
    return token
}

// Check email and password for login
// Note: Statics are for use on the model (User)
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })
    if (!user) {
        throw new Error('Unable to login')
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        throw new Error('Unable to login')
    }
    return user
}

// Hash password before saving
userSchema.pre('save', async function (next) {
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

// Delete user seenStatus when user is removed
userSchema.pre('remove', async function (next) {
    const user = this
    await ViewStatus.deleteMany({ owner: user._id })
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User