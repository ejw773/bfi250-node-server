const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()

// Create User
router.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        const userInfo = {
            name: user.name,
            email: user.email,
            filmSet: user.filmSet,
            token: token
        }
        res.status(201).send(userInfo)
    } catch (e) {
        res.status(400).send('Creating New Account Failed')
    }
})

// Login User
router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        const userInfo = {
            name: user.name,
            email: user.email,
            filmSet: user.filmSet,
            token: token
        }
        res.send(userInfo)
    } catch (e) {
        res.status(400).send('Login Failed')
    }
})

// Logout User
router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()
        res.send('Successfully logged out.')
    } catch (e) {
        res.status(500)
        res.send('Log Out Failed')
    }
})

// Logout All Devices
router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send('Successfully logged out of all devices.')
    } catch (e) {
        res.status(500).send('Log Out Failed')
    }
})

// Get your profile information
router.get('/users/me', auth, async (req, res) => {
    res.send(req.user)
})

// Update user profile information
router.patch('/users/me', auth, async (req, res) => {
    const toUpdateKeys = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'filmSet']
    const isValidOperation = toUpdateKeys.every((itemToUpdate) => {
        return allowedUpdates.includes(itemToUpdate)
    })
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid upates' })
    }
    try {
        toUpdateKeys.forEach((itemToUpdate) => {
            // Note: req.user is not coming from the request, but is inserted into req by auth middleware
            req.user[itemToUpdate] = req.body[itemToUpdate]
        })
        await req.user.save()
        res.send(req.user)
    } catch (e) {
        res.status(400).send('Updating Profile Failed')
    }
})

// Delete user
router.delete('/users/me', auth, async (req, res) => {
    try {
        await req.user.remove()
        res.send(req.user)
    } catch (e) {
        res.status(500).send('Account Deletion Failed')
    }
})

module.exports = router