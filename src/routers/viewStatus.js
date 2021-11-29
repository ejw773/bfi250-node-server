const express = require('express')
const ViewStatus = require('../models/viewStatus')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()

// VIEWSTATUS
// Read ALL status
router.get('/viewstatus', async (req, res) => {
    res.send('get all the view status information')
})

// Add or modify a status
router.patch('/viewstatus', auth, async (req, res) => {
    const toUpdateKeys = Object.keys(req.body)
    const allowedUpdates = ['film', 'viewStatus']
    const isValidOperation = toUpdateKeys.every((itemToUpdate) => {
        return allowedUpdates.includes(itemToUpdate)
    })
    if (!isValidOperation) {
        return res.status(400).send({error: 'Invalid operation'})
    }
    try {
        const viewStatus = await ViewStatus.findOne({ _id: req.params.id, owner: req.user._id })

        // If viewStatus does not exist, create it
        if (!viewStatus) {
            const viewStatus = new ViewStatus({
                ...req.body,
                owner: req.user._id
            })
            try {
                await viewStatus.save()
                res.status(201).send(viewStatus)
            } catch (e) {
                res.status(400).send(e)
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

// Delete one status
router.delete('/viewstatus', auth, async (req, res) => {
    res.send(`Nullifying ${req.body.film} for user ${req.body.user}`)
})


module.exports = router
