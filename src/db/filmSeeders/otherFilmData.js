const otherFilmData = [
  {
    title: 'Bicycle Thieves',
    director: 'Vittorio De Sica',
    year: 1948,
    imdbID: 'tt0040522',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNmI1ODdjODctMDlmMC00ZWViLWI5MzYtYzRhNDdjYmM3MzFjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    title: 'City Lights',
    director: 'Charlie Chaplin',
    year: 1931,
    imdbID: 'tt0021749',
    poster:
      'https://m.media-amazon.com/images/M/MV5BY2I4MmM1N2EtM2YzOS00OWUzLTkzYzctNDc5NDg2N2IyODJmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    title: 'The Gold Rush',
    director: 'Charlie Chaplin',
    year: 1925,
    imdbID: 'tt0015864',
    poster:
      'https://m.media-amazon.com/images/M/MV5BZjEyOTE4MzMtNmMzMy00Mzc3LWJlOTQtOGJiNDE0ZmJiOTU4L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    title: 'Battleship Potemkin',
    director: 'Sergei M. Eisenstein',
    year: 1925,
    imdbID: 'tt0015648',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTEyMTQzMjQ0MTJeQTJeQWpwZ15BbWU4MDcyMjg4OTEx._V1_SX300.jpg',
  },
  {
    title: 'Intolerance',
    director: 'D.W. Griffith',
    year: 1916,
    imdbID: 'tt0006864',
    poster:
      'https://m.media-amazon.com/images/M/MV5BZTc0YjA1ZjctOTFlZi00NWRiLWE2MTAtZDE1MWY1YTgzOTJjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    title: 'Louisian Story',
    director: 'Robert J. Flaherty',
    year: 1948,
    imdbID: 'tt0040550',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYTc0MDRhZTEtMWY4Ni00ZTg5LTg5Y2YtODE2NWVmY2IwNWRmXkEyXkFqcGdeQXVyNjMwMjk0MTQ@._V1_SX300.jpg',
  },
  {
    title: 'Greed',
    director: 'Erich von Stroheim',
    year: 1924,
    imdbID: 'tt0015881',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNzFhZWQ1MjgtYTNmNy00ZjdhLWEwZDctMzJkYzE5YTQwNjIxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    title: 'Le jour se lève',
    director: 'Marcel Carné',
    year: 1939,
    imdbID: 'tt0031514',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjI2MTc2NzQyMl5BMl5BanBnXkFtZTgwNTg1MTMxMzE@._V1_SX300.jpg',
  },
  {
    title: 'The Passion of Joan of Arc',
    director: 'Carl Theodor Dreyer',
    year: 1928,
    imdbID: 'tt0019254',
    poster:
      'https://images-na.ssl-images-amazon.com/images/I/51hNEZ8jDtL.jpg',
  },
  {
    title: 'Brief Encounter',
    director: 'David Lean',
    year: 1945,
    imdbID: 'tt0037558',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYWQ0MGNjOTYtMWJlNi00YWMxLWFmMzktYjAyNTVkY2U1NWNhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
  },
  {
    title: 'The Rules of the Game',
    director: 'Jean Renoir',
    year: 1939,
    imdbID: 'tt0031885',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYTE4NjYxMGEtZmQxZi00YWVmLWJjZTctYTJmNDFmZGEwNDVhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    title: 'Le Million',
    director: 'René Clair',
    year: 1931,
    imdbID: 'tt0022150',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjA1MTA3NjI3M15BMl5BanBnXkFtZTcwNTA3OTMyMQ@@._V1_SX300.jpg',
  },

  {
    title: 'Citizen Kane',
    director: 'Orson Welles',
    year: 1941,
    imdbID: 'tt0033467',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    title: 'L’Avventura',
    director: 'Michelangelo Antonioni',
    year: 1960,
    imdbID: 'tt0053619',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNmJlYTVjZTYtZDg1Yy00NzFiLWJmYzYtYTJhMjliY2I2ZTlhXkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_SX300.jpg',
  },
  {
    title: 'The Rules of the Game',
    director: 'Jean Renoir',
    year: 1939,
    imdbID: 'tt0031885',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYTE4NjYxMGEtZmQxZi00YWVmLWJjZTctYTJmNDFmZGEwNDVhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    title: 'Greed',
    director: 'Erich von Stroheim',
    year: 1924,
    imdbID: 'tt0015881',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNzFhZWQ1MjgtYTNmNy00ZjdhLWEwZDctMzJkYzE5YTQwNjIxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    title: 'Ugetsu Monogatari',
    director: 'Mizoguchi Kenji',
    year: 1953,
    imdbID: 'tt0046478',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNWRhYTZjMzUtYWJkOC00YjNmLWFmMzctNjI1MjFjOWQ3MmU1XkEyXkFqcGdeQXVyMTIyNzY1NzM@._V1_SX300.jpg',
  },
  {
    title: 'Battleship Potemkin',
    director: 'Sergei M. Eisenstein',
    year: 1925,
    imdbID: 'tt0015648',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTEyMTQzMjQ0MTJeQTJeQWpwZ15BbWU4MDcyMjg4OTEx._V1_SX300.jpg',
  },
  {
    title: 'Bicycle Thieves',
    director: 'Vittorio de Sica',
    year: 1948,
    imdbID: 'tt0040522',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNmI1ODdjODctMDlmMC00ZWViLWI5MzYtYzRhNDdjYmM3MzFjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    title: 'Ivan the Terrible, Part I',
    director: 'Sergei M. Eisenstein',
    year: 1945,
    imdbID: 'tt0037824',
    poster:
      'https://m.media-amazon.com/images/M/MV5BZjI1MWFmMTktOTE3Mi00NjE0LWFlMDctZGNiZThkODI3YTJjXkEyXkFqcGdeQXVyMTE5MjM5Njk3._V1_SX300.jpg',
  },
  {
    title: 'La Terra Trema',
    director: 'Luchino Visconti',
    year: 1948,
    imdbID: 'tt0040866',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMWQyNWE2OGYtZWYyNS00MjIzLTkyZGQtMjA4MzAzYjY2NGEwXkEyXkFqcGdeQXVyMzIzNDU1NTY@._V1_SX300.jpg',
  },
  {
    title: 'L’Atalante',
    director: 'Jean Vigo',
    year: 1934,
    imdbID: 'tt0024844',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMGRkOTA2NjYtMDEyOC00MWUxLTkzMjctZmU0MjVjZTQ1MjZlXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg',
  },

  {
    title: 'Citizen Kane',
    director: 'Orson Welles',
    year: 1941,
    imdbID: 'tt0033467',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    title: 'The Rules of the Game',
    director: 'Jean Renoir',
    year: 1939,
    imdbID: 'tt0031885',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYTE4NjYxMGEtZmQxZi00YWVmLWJjZTctYTJmNDFmZGEwNDVhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    title: 'Battleship Potemkin',
    director: 'Sergei M. Eisenstein',
    year: 1925,
    imdbID: 'tt0015648',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTEyMTQzMjQ0MTJeQTJeQWpwZ15BbWU4MDcyMjg4OTEx._V1_SX300.jpg',
  },
  {
    title: '8½',
    director: 'Federico Fellini',
    year: 1963,
    imdbID: 'tt0056801',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTQ4MTA0NjEzMF5BMl5BanBnXkFtZTgwMDg4NDYxMzE@._V1_SX300.jpg',
  },
  {
    title: 'L’Avventura',
    director: 'Michelangelo Antonioni',
    year: 1960,
    imdbID: 'tt0053619',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNmJlYTVjZTYtZDg1Yy00NzFiLWJmYzYtYTJhMjliY2I2ZTlhXkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_SX300.jpg',
  },
  {
    title: 'Persona',
    director: 'Ingmar Bergman',
    year: 1966,
    imdbID: 'tt0060827',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTM0YzExY2EtMjUyZi00ZmIwLWFkYTktNjY5NmVkYTdkMjI5XkEyXkFqcGdeQXVyNzQxNDExNTU@._V1_SX300.jpg',
  },
  {
    title: 'The Passion of Joan of Arc',
    director: 'Carl Theodor Dreyer',
    year: 1928,
    imdbID: 'tt0019254',
    poster:
      'https://images-na.ssl-images-amazon.com/images/I/51hNEZ8jDtL.jpg',
  },
  {
    title: 'The General',
    director: 'Buster Keaton',
    year: 1926,
    imdbID: 'tt0017925',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYmRiMDFlYjYtOTMwYy00OGY2LWE0Y2QtYzQxOGNhZmUwNTIxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    title: 'The Magnificent Ambersons',
    director: 'Orson Welles',
    year: 1942,
    imdbID: 'tt0035015',
    poster:
      'https://m.media-amazon.com/images/M/MV5BOTQ4Y2I5MzYtNDJkZS00YTFmLWJkODctMmU3YzQ3ZDhkMWE5XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
  },
  {
    title: 'Ugetsu Monogatari',
    director: 'Mizoguchi Kenji',
    year: 1953,
    imdbID: 'tt0046478',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNWRhYTZjMzUtYWJkOC00YjNmLWFmMzctNjI1MjFjOWQ3MmU1XkEyXkFqcGdeQXVyMTIyNzY1NzM@._V1_SX300.jpg',
  },
  {
    title: 'Wild Strawberries',
    director: 'Ingmar Bergman',
    year: 1957,
    imdbID: 'tt0050986',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYzdkODZlOGItY2RjZC00Mzc5LWI5NzMtZDUyMmNhNjljOWE2XkEyXkFqcGdeQXVyOTk4MjA5NjQ@._V1_SX300.jpg',
  },
  {
    title: 'Citizen Kane',
    director: 'Orson Welles',
    year: 1941,
    imdbID: 'tt0033467',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    title: 'The Rules of the Game',
    director: 'Jean Renoir',
    year: 1939,
    imdbID: 'tt0031885',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYTE4NjYxMGEtZmQxZi00YWVmLWJjZTctYTJmNDFmZGEwNDVhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    title: 'Seven Samurai',
    director: 'Akira Kurosawa',
    year: 1954,
    imdbID: 'tt0047478',
    poster:
      'https://m.media-amazon.com/images/M/MV5BOWE4ZDdhNmMtNzE5ZC00NzExLTlhNGMtY2ZhYjYzODEzODA1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    title: 'Singin’ in the Rain',
    director: 'Gene Kelly/Stanley Donen',
    year: 1951,
    imdbID: 'tt0045152',
    poster:
      'https://m.media-amazon.com/images/M/MV5BZDRjNGViMjQtOThlMi00MTA3LThkYzQtNzJkYjBkMGE0YzE1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg',
  },
  {
    title: '8½',
    director: 'Federico Fellini',
    year: 1963,
    imdbID: 'tt0056801',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTQ4MTA0NjEzMF5BMl5BanBnXkFtZTgwMDg4NDYxMzE@._V1_SX300.jpg',
  },
  {
    title: 'Battleship Potemkin',
    director: 'Sergei M. Eisenstein',
    year: 1925,
    imdbID: 'tt0015648',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTEyMTQzMjQ0MTJeQTJeQWpwZ15BbWU4MDcyMjg4OTEx._V1_SX300.jpg',
  },
  {
    title: 'L’Avventura',
    director: 'Michelangelo Antonioni',
    year: 1960,
    imdbID: 'tt0053619',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNmJlYTVjZTYtZDg1Yy00NzFiLWJmYzYtYTJhMjliY2I2ZTlhXkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_SX300.jpg',
  },
  {
    title: 'The Magnificent Ambersons',
    director: 'Orson Welles',
    year: 1942,
    imdbID: 'tt0035015',
    poster:
      'https://m.media-amazon.com/images/M/MV5BOTQ4Y2I5MzYtNDJkZS00YTFmLWJkODctMmU3YzQ3ZDhkMWE5XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
  },
  {
    title: 'Vertigo',
    director: 'Alfred Hitchcock',
    year: 1958,
    imdbID: 'tt0052357',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
  },
  {
    title: 'The General',
    director: 'Buster Keaton',
    year: 1926,
    imdbID: 'tt0017925',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYmRiMDFlYjYtOTMwYy00OGY2LWE0Y2QtYzQxOGNhZmUwNTIxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    title: 'The Searchers',
    director: 'John Ford',
    year: 1956,
    imdbID: 'tt0049730',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYWQ3YWJiMDEtMDBhNS00YjY1LTkzNmEtY2U4Njg4MjQ3YWE3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    title: 'Citizen Kane',
    director: 'Orson Welles',
    year: 1941,
    imdbID: 'tt0033467',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    title: 'The Rules of the Game',
    director: 'Jean Renoir',
    year: 1939,
    imdbID: 'tt0031885',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYTE4NjYxMGEtZmQxZi00YWVmLWJjZTctYTJmNDFmZGEwNDVhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    title: 'Tokyo Story',
    director: 'Ozu Yasujiro',
    year: 1953,
    imdbID: 'tt0046438',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYWQ4ZTRiODktNjAzZC00Nzg1LTk1YWQtNDFmNDI0NmZiNGIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    title: 'Vertigo',
    director: 'Alfred Hitchcock',
    year: 1958,
    imdbID: 'tt0052357',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
  },
  {
    title: 'The Searchers',
    director: 'John Ford',
    year: 1956,
    imdbID: 'tt0049730',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYWQ3YWJiMDEtMDBhNS00YjY1LTkzNmEtY2U4Njg4MjQ3YWE3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    title: 'L’Atalante',
    director: 'Jean Vigo',
    year: 1934,
    imdbID: 'tt0024844',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMGRkOTA2NjYtMDEyOC00MWUxLTkzMjctZmU0MjVjZTQ1MjZlXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg',
  },
  {
    title: 'The Passion of Joan of Arc',
    director: 'Carl Theodor Dreyer',
    year: 1928,
    imdbID: 'tt0019254',
    poster:
      'https://images-na.ssl-images-amazon.com/images/I/51hNEZ8jDtL.jpg',
  },
  {
    title: 'Pather Panchali',
    director: 'Satyajit Ray',
    year: 1955,
    imdbID: 'tt0048473',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNDE5YmMxYjEtZjNjNC00NjM2LWE2ZjctOTkyNGMxODRiMGNiXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_SX300.jpg',
  },
  {
    title: 'Battleship Potemkin',
    director: 'Sergei M. Eisenstein',
    year: 1925,
    imdbID: 'tt0015648',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTEyMTQzMjQ0MTJeQTJeQWpwZ15BbWU4MDcyMjg4OTEx._V1_SX300.jpg',
  },
  {
    title: '2001: A Space Odyssey',
    director: 'Stanley Kubrick',
    year: 1968,
    imdbID: 'tt0062622',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    title: 'Citizen Kane',
    director: 'Orson Welles',
    year: 1941,
    imdbID: 'tt0033467',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    title: 'Vertigo',
    director: 'Alfred Hitchcock',
    year: 1958,
    imdbID: 'tt0052357',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
  },
  {
    title: 'The Rules of the Game',
    director: 'Jean Renoir',
    year: 1939,
    imdbID: 'tt0031885',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYTE4NjYxMGEtZmQxZi00YWVmLWJjZTctYTJmNDFmZGEwNDVhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    title: 'The Godfather',
    director: 'Francis Ford Coppola',
    year: 1972,
    imdbID: 'tt0068646',
    poster:
      'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    title: 'The Godfather, Part II',
    director: 'Francis Ford Coppola',
    year: 1974,
    imdbID: 'tt0071562',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    title: 'Tokyo Story',
    director: 'Ozu Yasujiro',
    year: 1953,
    imdbID: 'tt0046438',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYWQ4ZTRiODktNjAzZC00Nzg1LTk1YWQtNDFmNDI0NmZiNGIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    title: '2001: A Space Odyssey',
    director: 'Stanley Kubrick',
    year: 1968,
    imdbID: 'tt0062622',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    title: 'Battleship Potemkin',
    director: 'Sergei M. Eisenstein',
    year: 1925,
    imdbID: 'tt0015648',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTEyMTQzMjQ0MTJeQTJeQWpwZ15BbWU4MDcyMjg4OTEx._V1_SX300.jpg',
  },
  {
    title: 'Sunrise',
    director: 'F. W. Murnau',
    year: 1927,
    imdbID: 'tt0018455',
    poster:
      'https://images-na.ssl-images-amazon.com/images/I/81vlvZJCo9L._SX600_.jpg',
  },
  {
    title: '8½',
    director: 'Federico Fellini',
    year: 1963,
    imdbID: 'tt0056801',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTQ4MTA0NjEzMF5BMl5BanBnXkFtZTgwMDg4NDYxMzE@._V1_SX300.jpg',
  },
  {
    title: 'Singin’ in the Rain',
    director: 'Gene Kelly/Stanley Donen',
    year: 1951,
    imdbID: 'tt0045152',
    poster:
      'https://m.media-amazon.com/images/M/MV5BZDRjNGViMjQtOThlMi00MTA3LThkYzQtNzJkYjBkMGE0YzE1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg',
  }

]

  module.exports = otherFilmData;