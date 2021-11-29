const mongoose = require('mongoose')

const filmSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    imdbID: {
        type: String,
        required: true
    },
    _id: {
        type: String
    },
    poster: {
        type: String,
        required: true
    }
})

const Film = mongoose.model('Film', filmSchema)

module.exports = Film