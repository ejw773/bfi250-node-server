const express = require('express');
const Rank = require('../models/rank');
const auth = require('../middleware/auth');
const router = new express.Router();
const rankHelper = require('./rankHelper');

// RANKS
// Get all ranks
router.get('/ranks', (req, res) => {
  Rank.find({})
    .populate('film')
    .then((ranks) => {
      res.send(ranks);
    })
    .catch((e) => {
      res.status(400);
      res.send(e);
    });
});

// Get ranks by year
router.get('/ranks/:bfiSet', (req, res) => {
  Rank.find({ bfiSet: req.params.bfiSet })
    .populate('film')
    .then((ranks) => {
      const shapedData = ranks.map((film) => {
        return {
          bfiRank: film.bfiRank,
          imdbID: film.imdbID,
          title: film.film.title,
          director: film.film.director,
          year: film.film.year,
          poster: film.film.poster,
        };
      });
      const sortedData = shapedData.sort((a, b) => {
        return a.bfiRank - b.bfiRank;
      });
      const labeledData = {
        [req.params.bfiSet]: [...sortedData],
      };
      res.send(labeledData);
    })
    .catch((e) => {
      res.status(400);
      res.send(e);
    });
});

// Get all ranks, including film data, all years
router.get('/ranks/all/withfilms', async (req, res) => {
  try {
    const bfi1952 = await rankHelper('bfi1952');
    const bfi1962 = await rankHelper('bfi1962');
    const bfi1972 = await rankHelper('bfi1972');
    const bfi1982 = await rankHelper('bfi1982');
    const bfi1992 = await rankHelper('bfi1992');
    const bfi2002 = await rankHelper('bfi2002');
    const bfi2012 = await rankHelper('bfi2012');
    const bfi2022 = await rankHelper('bfi2022');
    const filmData = {
      bfi1952,
      bfi1962,
      bfi1972,
      bfi1982,
      bfi1992,
      bfi2002,
      bfi2012,
      bfi2022,
    };
    res.send(filmData);
  } catch (e) {
    res.status(400);
    res.send(e);
  }
});

router.get('/ranks/my/:bfiSet', auth, async (req, res) => {
  try {
    await req.user.populate('seenStatus');
    const mySeenStatus = await req.user.seenStatus;
    const shapedStatus = await mySeenStatus.map((stat) => {
      return {
        imdbID: stat.film,
        seenStatus: stat.seenStatus,
      };
    });
    const filmData = await Rank.find({ bfiSet: req.params.bfiSet }).populate(
      'film'
    );
    const shapedData = await filmData.map((film) => {
      return {
        bfiRank: film.bfiRank,
        imdbID: film.imdbID,
        title: film.film.title,
        director: film.film.director,
        year: film.film.year,
        poster: film.film.poster,
      };
    });
    const mergedData = (shapedStatus, shapedData) => {
      for (i = 0; i < shapedData.length; i++) {
        for (j = 0; j < shapedStatus.length; j++) {
          const thisMovie = shapedData[i].imdbID;
          const thisStat = shapedStatus[j].imdbID;
          if (thisMovie === thisStat) {
            shapedData[i].seenStatus = shapedStatus[j].seenStatus;
          }
        }
      }
    };
    mergedData(shapedStatus, shapedData);
    const sortedData = shapedData.sort((a, b) => {
      return a.bfiRank - b.bfiRank;
    });
    res.send(sortedData);
  } catch (e) {
    res.status(400);
    res.send(e);
  }
});

// Get ranks by an imdbID
router.get('/ranks/imdb/:imdbID', (req, res) => {
  Rank.find({ imdbID: req.params.imdbID })
    .populate('film')
    .then((ranks) => {
      res.send(ranks);
    })
    .catch((e) => {
      res.status(400);
      res.send(e);
    });
});

module.exports = router;
