// Note: For the env to load correctly, run this file from the root directory
require('dotenv').config({ path: '../../../.env' });
require('../mongoose');
const colors = require('colors');
const Film = require('../../models/film');
const filmData = require('./filmData');

const filmSeeder = () => {
  for (let i = 0; i < filmData.length; i++) {
    const film = new Film(filmData[i]);
    film._id = filmData[i].imdbID;
    film
      .save()
      .then((film) => {
        console.log(`${film.title}: Added`.green);
      })
      .catch((e) => {
        console.log(`${film.title} encountered an error: ${e}`.inverse.red);
      });
  }
};

filmSeeder();
