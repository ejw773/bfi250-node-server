// Note: For the env to load correctly, run this file from the root directory
require('dotenv').config({ path: '../../../.env' })
require('../mongoose')
const colors = require('colors')
const Film = require('../../models/film')
const Rank = require('../../models/rank')

// To add a new data set, change the line below (total of 2 places)
const rankData = {bfi2012} = require('./bfi2012')

Rank.find({}).then(() => {
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
})
