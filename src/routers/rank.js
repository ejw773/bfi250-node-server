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
        const sortedData = shapedData.sort((a, b) => {
            return a.bfiRank - b.bfiRank
        })
        const labeledData = {
            [req.params.bfiSet]: [...sortedData]
        }
        res.send(labeledData)
    }).catch((e) => {
        res.status(400)
        res.send(e)
    })
})

router.get('/ranks/my/:bfiSet', auth, async (req, res) => {
    try {
        await req.user.populate('viewStatus')
        const myViewStatus = await req.user.viewStatus
        const shapedStatus = await myViewStatus.map(stat => {return {
            imdbID: stat.film,
            viewStatus: stat.viewStatus
        }})
        const filmData = await Rank.find({ bfiSet: req.params.bfiSet }).populate('film')
        const shapedData = await filmData.map(film => {return {
                bfiRank: film.bfiRank,
                imdbID: film.imdbID,
                title: film.film.title,
                director: film.film.director,
                year: film.film.year,
                poster: film.film.poster   
        }})
        const mergedData = (shapedStatus, shapedData) => {
            for (i = 0; i < shapedData.length; i++) {
                for (j = 0; j < shapedStatus.length; j++) {
                    const thisMovie = shapedData[i].imdbID;
                    const thisStat = shapedStatus[j].imdbID
                    if (thisMovie === thisStat) {
                        shapedData[i].viewStatus = shapedStatus[j].viewStatus
                    }
                }
            }
        }
        mergedData(shapedStatus, shapedData)
            const sortedData = shapedData.sort((a, b) => {
                return a.bfiRank - b.bfiRank
            })
            const labeledData = {
                [req.params.bfiSet]: [...sortedData]
            }
            res.send(labeledData)    
    } catch (e) {
        res.status(400)
        res.send(e)
    }
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