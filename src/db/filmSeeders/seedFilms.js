require('dotenv').config({ path: '../../../.env' })
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const bfi1952 = require('./1952')
const bfi1962 = require('./1962')
const bfi1972 = require('./1972')
const bfi1982 = require('./1982')
const bfi1992 = require('./1992')
const bfi2002 = require('./2002')
const bfi2012 = require('./2012')

const allOfThem = [bfi1952, bfi1962, bfi1972, bfi1982, bfi1992, bfi2002, bfi2012]

const connectionURL = process.env.MONGODB_URL
const databaseName = process.env.DB_NAME

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database.')
    }
    const db = client.db(databaseName)

    const batchAdd = async (collectionName, collectionContent) => {
        const addTheFilms = await db.collection(collectionName).insertMany(collectionContent, error, result => {
            if (error) {
                console.log(`There was an error adding ${collectionName}`)
                return error
            }
            console.log(`${collectionName} was successfully added.`)
            return result
        })
    }

    for (let i = 0; i < allOfThem.length; i++) {
        if (allOfThem.length !==0) {
            const thisYear = ((i * 10) + 1952)
            const thisCollectionName = 'bfi' + thisYear
            batchAdd(thisCollectionName, allOfThem[i])
        }
    }
})