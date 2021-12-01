const express = require('express')
const Rank = require('../models/rank')
const auth = require('../middleware/auth')
const router = new express.Router()

// RANKS
// Get all ranks
router.get('/ranks', (req, res) => {
    Rank.find({})
    .populate('film')
    .then((ranks) => {
        res.send(ranks)
    }).catch((e) => {
        res.status(400)
        res.send(e)
    })
})

// Get ranks by year
router.get('/ranks/:bfiSet', (req, res) => {
    Rank.find({ bfiSet: req.params.bfiSet })
    .populate('film')
    .then((ranks) => {
        const shapedData = ranks.map(film => {return {
            bfiRank: film.bfiRank,
            imdbID: film.imdbID,
            title: film.film.title,
            director: film.film.director,
            year: film.film.year,
            poster: film.film.poster   
        }})
        const labeledData = {
            [req.params.bfiSet]: [...shapedData]
        }
        res.send(labeledData)
    }).catch((e) => {
        res.status(400)
        res.send(e)
    })
})

// Get ranks by an imdbID
router.get('/ranks/imdb/:imdbID', (req, res) => {
    Rank.find({ imdbID: req.params.imdbID })
    .populate('film')
    .then((ranks) => {
        res.send(ranks)
    }).catch((e) => {
        res.status(400)
        res.send(e)
    })
})

module.exports = router