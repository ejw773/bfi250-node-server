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
    console.log(req.params.bfiSet)
    Rank.find({ bfiSet: req.params.bfiSet })
    .populate('film')
    .then((ranks) => {
        res.send(ranks)
    }).catch((e) => {
        res.status(400)
        res.send(e)
    })
})

// Get ranks by an imdbID
router.get('/ranks/imdb/:imdbID', (req, res) => {
    console.log(req.params.imdbID)
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