require('dotenv').config()
console.log(process.env.MONGODB_URL)
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = process.env.MONGODB_URL
const databaseName = 'bfi250'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database.')
    }

    const db = client.db(databaseName)

    db.collection('bfi1952').insertMany([
            {
              title: 'Bicycle Thieves',
              director: 'Vittorio De Sica',
              year: '1948',
              bfiRank: '1',
              imdbID: 'tt0040522',
              poster:
                'https://m.media-amazon.com/images/M/MV5BNmI1ODdjODctMDlmMC00ZWViLWI5MzYtYzRhNDdjYmM3MzFjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
            },
            {
              title: 'City Lights',
              director: 'Charlie Chaplin',
              year: '1931',
              bfiRank: '2',
              imdbID: 'tt0021749',
              poster:
                'https://m.media-amazon.com/images/M/MV5BY2I4MmM1N2EtM2YzOS00OWUzLTkzYzctNDc5NDg2N2IyODJmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
            },
            {
              title: 'The Gold Rush',
              director: 'Charlie Chaplin',
              year: '1925',
              bfiRank: '3',
              imdbID: 'tt0015864',
              poster:
                'https://m.media-amazon.com/images/M/MV5BZjEyOTE4MzMtNmMzMy00Mzc3LWJlOTQtOGJiNDE0ZmJiOTU4L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
            },
            {
              title: 'Battleship Potemkin',
              director: 'Sergei M. Eisenstein',
              year: '1925',
              bfiRank: '4',
              imdbID: 'tt0015648',
              poster:
                'https://m.media-amazon.com/images/M/MV5BMTEyMTQzMjQ0MTJeQTJeQWpwZ15BbWU4MDcyMjg4OTEx._V1_SX300.jpg',
            },
            {
              title: 'Intolerance',
              director: 'D.W. Griffith',
              year: '1916',
              bfiRank: '5',
              imdbID: 'tt0006864',
              poster:
                'https://m.media-amazon.com/images/M/MV5BZTc0YjA1ZjctOTFlZi00NWRiLWE2MTAtZDE1MWY1YTgzOTJjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
            },
            {
              title: 'Louisian Story',
              director: 'Robert J. Flaherty',
              year: '1948',
              bfiRank: '6',
              imdbID: 'tt0040550',
              poster:
                'https://m.media-amazon.com/images/M/MV5BYTc0MDRhZTEtMWY4Ni00ZTg5LTg5Y2YtODE2NWVmY2IwNWRmXkEyXkFqcGdeQXVyNjMwMjk0MTQ@._V1_SX300.jpg',
            },
            {
              title: 'Greed',
              director: 'Erich von Stroheim',
              year: '1924',
              bfiRank: '7',
              imdbID: 'tt0015881',
              poster:
                'https://m.media-amazon.com/images/M/MV5BNzFhZWQ1MjgtYTNmNy00ZjdhLWEwZDctMzJkYzE5YTQwNjIxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
            },
            {
              title: 'Le jour se lève',
              director: 'Marcel Carné',
              year: '1939',
              bfiRank: '8',
              imdbID: 'tt0031514',
              poster:
                'https://m.media-amazon.com/images/M/MV5BMjI2MTc2NzQyMl5BMl5BanBnXkFtZTgwNTg1MTMxMzE@._V1_SX300.jpg',
            },
            {
              title: 'The Passion of Joan of Arc',
              director: 'Carl Theodor Dreyer',
              year: '1928',
              bfiRank: '9',
              imdbID: 'tt0019254',
              poster:
                'https://images-na.ssl-images-amazon.com/images/I/51hNEZ8jDtL.jpg',
            },
            {
              title: 'Brief Encounter',
              director: 'David Lean',
              year: '1945',
              bfiRank: '10',
              imdbID: 'tt0037558',
              poster:
                'https://m.media-amazon.com/images/M/MV5BYWQ0MGNjOTYtMWJlNi00YWMxLWFmMzktYjAyNTVkY2U1NWNhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
            },
            {
              title: 'The Rules of the Game',
              director: 'Jean Renoir',
              year: '1939',
              bfiRank: '11',
              imdbID: 'tt0031885',
              poster:
                'https://m.media-amazon.com/images/M/MV5BYTE4NjYxMGEtZmQxZi00YWVmLWJjZTctYTJmNDFmZGEwNDVhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
            },
            {
              title: 'Le Million',
              director: 'René Clair',
              year: '1931',
              bfiRank: '12',
              imdbID: 'tt0022150',
              poster:
                'https://m.media-amazon.com/images/M/MV5BMjA1MTA3NjI3M15BMl5BanBnXkFtZTcwNTA3OTMyMQ@@._V1_SX300.jpg',
            },
          ], (error, result) => {
            if (error) {
                return console.log(error)
            }
            return console.log(result)
          }
    )
})