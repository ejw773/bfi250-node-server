const mongoose = require('mongoose')

const rankSchema = new mongoose.Schema({
        bfiSet: {
            type: String,
            required: true
        },
        bfiRank: {
            type: Number,
            required: true
        },
        imdbID: {
            type: String,
            required: true
        },
        film: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Film',
        }
})

const Rank = mongoose.model('Rank', rankSchema)

module.exports = Rank
