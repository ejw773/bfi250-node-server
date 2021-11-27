const mongoose = require('mongoose')

const rankSchema = new mongoose.Schema({
    imdbID: {
        type: String,
        required: true
    },
    bfiSet: {
        type: String,
        required: true
    },
    bfiRank: {
        type: Number,
        required: true
    }
})

const Rank = mongoose.model('Rank', rankSchema)

module.exports = Rank
