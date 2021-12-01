const express = require('express')
const ViewStatus = require('../models/viewStatus')
const auth = require('../middleware/auth')
const router = new express.Router()

// Read all my viewStatus
router.get('/viewStatus', auth, async (req, res) => {
    try {
        await req.user.populate('viewStatus')
        const shapedData = req.user.viewStatus.map(viewStatus => {return {[viewStatus.film]: viewStatus.viewStatus}})
        res.send(shapedData)
    } catch (e) {
        res.status = 500
        res.send(e)
    }
})

// Read one viewStatus by id
router.get('/viewStatus/:id', auth, async (req, res) => {
    try {
        const viewStatus = await ViewStatus.findOne({ _id: req.params.id, owner: req.user._id })
        if (!viewStatus) {
            return res.status(404).send()
        }
        res.send(viewStatus)
    } catch (e) {
        res.status(500).send(e)
    }
})

// Read one viewStatus by imdbID
router.get('/viewStatus/film/:id', auth, async (req, res) => {
    try {
        const viewStatus = await ViewStatus.findOne({ film: req.params.id, owner: req.user._id })
        if (!viewStatus) {
            return res.status(404).send()
        }
        res.send(viewStatus)
    } catch (e) {
        res.status(500).send(e)
    }
})


// Add or modify a status
router.post('/viewStatus', auth, async (req, res) => {
    const toUpdateKeys = Object.keys(req.body)
    const allowedUpdates = ['film', 'viewStatus']
    const isValidOperation = toUpdateKeys.every((itemToUpdate) => {
        return allowedUpdates.includes(itemToUpdate)
    })
    if (!isValidOperation) {
        return res.status(400).send({error: 'Invalid operation'})
    }
    try {
        const viewStatus = await ViewStatus.findOne({ film: req.params.id, owner: req.user._id })

        // If viewStatus does not exist, create it
        if (!viewStatus) {
            const viewStatus = new ViewStatus({
                ...req.body,
                owner: req.user._id
            })
            try {
                await viewStatus.save()
                return res.status(201).send(viewStatus)
            } catch (e) {
                return res.status(400).send(e)
            }
        }

        // If viewStatus exists, update it
        toUpdateKeys.forEach((itemToUpdate) => viewStatus[itemToUpdate] = req.body[itemToUpdate])
        await viewStatus.save()
        res.send(viewStatus)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Delete viewStatus by _id
router.delete('/viewStatus/:id', auth, async (req, res) => {
    try {
        const viewStatus = await ViewStatus.findOneAndDelete({ _id: req.params.id, owner: req.user._id })
        res.send(`Item Deleted: ${viewStatus}`)
    } catch (e) {
        res.status(500).send(e)
    }
    res.send(`Nullifying ${req.body.film} for user ${req.body.user}`)
})

// Delete viewStatus by imdbID
router.delete('/viewStatus/film/:imdbID', auth, async (req, res) => {
    try {
        const viewStatus = await ViewStatus.findOneAndDelete({ film: req.params.imdbID, owner: req.user._id })
        res.send(`Item Deleted: ${viewStatus}`)        
    } catch (e) {
        res.status(500).send(e)
    }
})


module.exports = router
