const express = require('express')
const ViewStatus = require('../models/seenStatus')
const auth = require('../middleware/auth')
const router = new express.Router()

// Read all my seenStatus
router.get('/seenStatus', auth, async (req, res) => {
    try {
        await req.user.populate('seenStatus')
        const shapedData = req.user.seenStatus.map(seenStatus => {return {[seenStatus.film]: seenStatus.seenStatus}})
        res.send(shapedData)
    } catch (e) {
        res.status = 500
        res.send(e)
    }
})

// Read one seenStatus by id
router.get('/seenStatus/:id', auth, async (req, res) => {
    try {
        const seenStatus = await ViewStatus.findOne({ _id: req.params.id, owner: req.user._id })
        if (!seenStatus) {
            return res.status(404).send()
        }
        res.send(seenStatus)
    } catch (e) {
        res.status(500).send(e)
    }
})

// Read one seenStatus by imdbID
router.get('/seenStatus/film/:id', auth, async (req, res) => {
    try {
        const seenStatus = await ViewStatus.findOne({ film: req.params.id, owner: req.user._id })
        if (!seenStatus) {
            return res.status(404).send()
        }
        res.send(seenStatus)
    } catch (e) {
        res.status(500).send(e)
    }
})


// Add or modify a status
router.post('/seenStatus', auth, async (req, res) => {
    const toUpdateKeys = Object.keys(req.body)
    const allowedUpdates = ['film', 'seenStatus']
    const isValidOperation = toUpdateKeys.every((itemToUpdate) => {
        return allowedUpdates.includes(itemToUpdate)
    })
    if (!isValidOperation) {
        return res.status(400).send({error: 'Invalid operation'})
    }
    try {
        const seenStatus = await ViewStatus.findOne({ film: req.params.id, owner: req.user._id })

        // If seenStatus does not exist, create it
        if (!seenStatus) {
            const seenStatus = new ViewStatus({
                ...req.body,
                owner: req.user._id
            })
            try {
                await seenStatus.save()
                return res.status(201).send(seenStatus)
            } catch (e) {
                return res.status(400).send(e)
            }
        }

        // If seenStatus exists, update it
        toUpdateKeys.forEach((itemToUpdate) => seenStatus[itemToUpdate] = req.body[itemToUpdate])
        await seenStatus.save()
        res.send(seenStatus)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Delete seenStatus by _id
router.delete('/seenStatus/:id', auth, async (req, res) => {
    try {
        const seenStatus = await ViewStatus.findOneAndDelete({ _id: req.params.id, owner: req.user._id })
        res.send(`Item Deleted: ${seenStatus}`)
    } catch (e) {
        res.status(500).send(e)
    }
    res.send(`Nullifying ${req.body.film} for user ${req.body.user}`)
})

// Delete seenStatus by imdbID
router.delete('/seenStatus/film/:imdbID', auth, async (req, res) => {
    try {
        const seenStatus = await ViewStatus.findOneAndDelete({ film: req.params.imdbID, owner: req.user._id })
        res.send(`Item Deleted: ${seenStatus}`)        
    } catch (e) {
        res.status(500).send(e)
    }
})


module.exports = router
