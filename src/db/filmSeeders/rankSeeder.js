// Note: For the env to load correctly, run this file from the root directory
// This file will need to be modified to add new data from the BFI
require('dotenv').config({ path: '../../../.env' });
require('../mongoose');
const Film = require('../../models/film');
const Rank = require('../../models/rank');

// If a new file for a new year is introduced, add it below
const bfi1952 = require('./bfi1952');
const bfi1962 = require('./bfi1962');
const bfi1972 = require('./bfi1972');
const bfi1982 = require('./bfi1982');
const bfi1992 = require('./bfi1992');
const bfi2002 = require('./bfi2002');
const bfi2012 = require('./bfi2012');
const bfi2022 = require('./bfi2022');

// Change rankData to only include new information from BFI
let rankData = bfi1952;
rankData = rankData
  .concat(bfi1962)
  .concat(bfi1972)
  .concat(bfi1982)
  .concat(bfi1992)
  .concat(bfi2002)
  .concat(bfi2012)
  .concat(bfi2022);

const seedRanks = async () => {
  Rank.find({}).then(() => {
    for (i = 0; i < rankData.length; i++) {
      let thisFilm = rankData[i];
      const newRank = new Rank({
        bfiSet: thisFilm.bfiSet,
        bfiRank: thisFilm.bfiRank,
        imdbID: thisFilm.imdbID,
        film: thisFilm.imdbID,
      });
      newRank
        .save()
        .then((rank) => {
          console.log(`Added: ${rank._id}`);
        })
        .catch((e) => console.log(e));
    }
  });
};

seedRanks();
