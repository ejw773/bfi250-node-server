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

    db.collection('bfi2022').insertMany([

          ], (error, result) => {
            if (error) {
                return console.log(error)
            }
            return console.log(result)
          }
    )
})