// Note: For the env to load correctly, run this file from the root directory
require('dotenv').config({ path: '../../../.env' })
require('../mongoose')
const colors = require('colors')
const Film = require('../../models/film')

const films = require('./filmData')
// const bfi1962 = require('./1962')
// const bfi1972 = require('./1972')
// const bfi1982 = require('./1982')
// const bfi1992 = require('./1992')
// const bfi2002 = require('./2002')
// const bfi2012 = require('./2012')

// Modify 'addTheseFilms' according to what you want added to the database
// const addTheseFilms = bfi1952.concat(bfi1962, bfi1972, bfi1982, bfi1992, bfi2002, bfi2012)

const addTheseFilms = bfi1952

for (let i = 0; i < addTheseFilms.length; i++) {
    const film = new Film(addTheseFilms[i]);
    film.save().then(() => {
        console.log(`${film.title}: Added`)
    }).catch((e) => {
        // Watch for red highlighted text in the console. This indicates a film was not added.
        console.log(`${film.title} encountered an error: ${e}`.inverse.red)
    })
}
