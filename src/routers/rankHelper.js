const Rank = require('../models/rank');

const rankHelper = async (filmSet) => {
  try {
    const thisFilmSet = await Rank.find({ bfiSet: filmSet }).populate('film');
    const shapedData = await thisFilmSet.map((film) => {
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
    return sortedData;
  } catch (e) {
    return e;
  }
};

module.exports = rankHelper;
