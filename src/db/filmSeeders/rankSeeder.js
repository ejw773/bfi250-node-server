// Note: For the env to load correctly, run this file from the root directory
require('dotenv').config({ path: '../../../.env' })
require('../mongoose')
const colors = require('colors')
const Rank = require('../../models/rank')

// Change the line below to add a new data set
const rankData = {bfi2012} = require('./bfi2012')


const newRank = new Rank({
    bfiSet: rankData.bfiSet,
    filmRanks: rankData.filmRanks
})
newRank.save().then((newRank) => {
    return console.log(newRank)
})
