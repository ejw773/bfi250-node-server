const express = require('express')
const Film = require('../models/film')
const auth = require('../middleware/auth')
const router = new express.Router()

router.get('/films', (req, res) => {
    Film.find({}).then((films) => {
        res.send(films)
    }).catch((e) => {
        res.status(500).send()
    })
})

router.get('/films/:id', (req, res) => {
    Film.findById(req.params.id).then((film) => {
        res.send(film)
    }).catch((e) => {
        res.status(500).send()
    })
})

router.get('/films/imdb/:imdbid', (req, res) => {
    Film.find({ imdbID: req.params.imdbid }).then((film) => {
        res.send(film)
    }).catch((e) => {
        res.status(500).send()
    })
})

router.post('/films', (req, res) => {
    res.status(503)
    res.send('Currently unavailble')
    // const film = new Film(req.body)
    // film.save().then((film) => {
    //     res.status(201)
    //     res.send(film)
    // }).catch((e) => {
    //     res.status(400)
    //     res.end(`Failed to save: ${e}`)
    // })
})

module.exports = router