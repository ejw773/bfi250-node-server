const mongoose = require('mongoose')

const rankSchema = new mongoose.Schema({
    bfiSet: {
        type: String,
        required: true
    },
    filmRanks: [{
        // film: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: 'Film'
        // },
        bfiRank: {
            type: Number,
            required: true
        },
        imdbID: {
            type: String,
            required: true
        }
    }]
})

const Rank = mongoose.model('Rank', rankSchema)

module.exports = Rank
