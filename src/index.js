require('dotenv').config()
const { MongoClient } = require('mongodb')
const connectionURL = process.env.MONGODB_URL
const databaseName = process.env.DB_NAME

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to the database.')
    }
    const db = client.db(databaseName)

    

})