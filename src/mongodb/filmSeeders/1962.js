require('dotenv').config()
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = process.env.MONGODB_URL
const databaseName = 'bfi250'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database.')
    }

    const db = client.db(databaseName)

    db.collection('bfi1962').insertMany([
        {
            title: 'Citizen Kane',
            director: 'Orson Welles',
            year: '1941',
            bfiRank: '1',
            imdbID: 'tt0033467',
            poster:
              'https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
          },
          {
            title: 'L’Avventura',
            director: 'Michelangelo Antonioni',
            year: '1960',
            bfiRank: '2',
            imdbID: 'tt0053619',
            poster:
              'https://m.media-amazon.com/images/M/MV5BNmJlYTVjZTYtZDg1Yy00NzFiLWJmYzYtYTJhMjliY2I2ZTlhXkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_SX300.jpg',
          },
          {
            title: 'The Rules of the Game',
            director: 'Jean Renoir',
            year: '1939',
            bfiRank: '3',
            imdbID: 'tt0031885',
            poster:
              'https://m.media-amazon.com/images/M/MV5BYTE4NjYxMGEtZmQxZi00YWVmLWJjZTctYTJmNDFmZGEwNDVhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
          },
          {
            title: 'Greed',
            director: 'Erich von Stroheim',
            year: '1924',
            bfiRank: '4',
            imdbID: 'tt0015881',
            poster:
              'https://m.media-amazon.com/images/M/MV5BNzFhZWQ1MjgtYTNmNy00ZjdhLWEwZDctMzJkYzE5YTQwNjIxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
          },
          {
            title: 'Ugetsu Monogatari',
            director: 'Mizoguchi Kenji',
            year: '1953',
            bfiRank: '5',
            imdbID: 'tt0046478',
            poster:
              'https://m.media-amazon.com/images/M/MV5BNWRhYTZjMzUtYWJkOC00YjNmLWFmMzctNjI1MjFjOWQ3MmU1XkEyXkFqcGdeQXVyMTIyNzY1NzM@._V1_SX300.jpg',
          },
          {
            title: 'Battleship Potemkin',
            director: 'Sergei M. Eisenstein',
            year: '1925',
            bfiRank: '6',
            imdbID: 'tt0015648',
            poster:
              'https://m.media-amazon.com/images/M/MV5BMTEyMTQzMjQ0MTJeQTJeQWpwZ15BbWU4MDcyMjg4OTEx._V1_SX300.jpg',
          },
          {
            title: 'Bicycle Thieves',
            director: 'Vittorio de Sica',
            year: '1948',
            bfiRank: '7',
            imdbID: 'tt0040522',
            poster:
              'https://m.media-amazon.com/images/M/MV5BNmI1ODdjODctMDlmMC00ZWViLWI5MzYtYzRhNDdjYmM3MzFjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
          },
          {
            title: 'Ivan the Terrible, Part I',
            director: 'Sergei M. Eisenstein',
            year: '1945',
            bfiRank: '8',
            imdbID: 'tt0037824',
            poster:
              'https://m.media-amazon.com/images/M/MV5BZjI1MWFmMTktOTE3Mi00NjE0LWFlMDctZGNiZThkODI3YTJjXkEyXkFqcGdeQXVyMTE5MjM5Njk3._V1_SX300.jpg',
          },
          {
            title: 'La Terra Trema',
            director: 'Luchino Visconti',
            year: '1948',
            bfiRank: '9',
            imdbID: 'tt0040866',
            poster:
              'https://m.media-amazon.com/images/M/MV5BMWQyNWE2OGYtZWYyNS00MjIzLTkyZGQtMjA4MzAzYjY2NGEwXkEyXkFqcGdeQXVyMzIzNDU1NTY@._V1_SX300.jpg',
          },
          {
            title: 'L’Atalante',
            director: 'Jean Vigo',
            year: '1934',
            bfiRank: '10',
            imdbID: 'tt0024844',
            poster:
              'https://m.media-amazon.com/images/M/MV5BMGRkOTA2NjYtMDEyOC00MWUxLTkzMjctZmU0MjVjZTQ1MjZlXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg',
          }], (error, result) => {
            if (error) {
                return console.log(error)
            }
            return console.log(result)
          }
    )
})