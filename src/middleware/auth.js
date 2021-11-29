require('dotenv').config()
const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        // Decode to (1) get the ID and (2) verify that the token is valid
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        // Use both (1) decoded _id AND (2) un-decoded token, to make sure BOTH are in the database
        // If the token has been deleted from the database, the User.findOne returns nothing
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })
        if (!user) {
            throw new Error()
        }
        // Copies the token from the header and sticks it into the req for easy future use
        req.token = token
        // Copies the just retrieved user and sticks it into the req
        // The database can now be modified by req.user, as req.user refers to the User.findOne result above
        req.user = user
        next()
    } catch (e) {
        res.status(401)
        res.send({ error: 'Authentication required.'})
    }
}

module.exports = auth