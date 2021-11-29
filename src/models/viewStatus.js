const mongoose = require('mongoose')

const viewStatusSchema = new mongoose.Schema({
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        film: {
            type: String,
            ref: 'Film',
        },
        viewStatus: {
            type: Boolean,
            required: true
    }
})

const ViewStatus = mongoose.model('ViewStatus', viewStatusSchema)

module.exports = ViewStatus
