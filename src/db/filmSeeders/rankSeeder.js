// Note: For the env to load correctly, run this file from the root directory
require('dotenv').config({ path: '../../../.env' })
require('../mongoose')
const colors = require('colors')
const Film = require('../../models/film')
const Rank = require('../../models/rank')

// Change the line below to add a new data set
const rankData = {bfi1952} = require('./bfi1952')

Rank.findOne({bfiSet: '1952'}).then((bfiSet) => {
    if (bfiSet) {
        // do nothing
    } else {
        for (i = 0; i < rankData.length; i++) {
            let thisImdbID = rankData[i].imdbID
            let thisFilm = rankData[i]
            Film.findOne({ imdbID: thisImdbID }).then((film) => {
                let film_id = film._id.toString()
                const newRank = new Rank({
                    bfiSet: thisFilm.bfiSet,
                    bfiRank: thisFilm.bfiRank,
                    imdbID: thisFilm.imdbID,
                    film: film_id
                })
                console.log(newRank)
                newRank.save().then((rank) => {
                    console.log(`Added: ${rank.imdbID}`)
                }).catch((e) => console.log(e))
                    
            })    
        }
    }
})
