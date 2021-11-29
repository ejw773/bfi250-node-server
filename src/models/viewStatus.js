const mongoose = require('mongoose')

const viewStatusSchema = new mongoose.Schema({
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        film: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Film',
        },
        viewStatus: {
            type: Boolean,
            required: true,
            default: null
        }
})

const ViewStatus = mongoose.model('ViewStatus', viewStatusSchema)

module.exports = ViewStatus
