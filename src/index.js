require('dotenv').config()
require('./db/mongoose')
const express = require('express')

const User = require('./models/user')
const Film = require('./models/film')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())



app.post('/users', (req, res) => {
    const user = new User(req.body)
    user.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.post('/films', (req, res) => {
    const film = new Film(req.body)
    film.save().then(() => {
        res.send(film)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})


// const { MongoClient } = require('mongodb')
// const connectionURL = process.env.MONGODB_URL
// const databaseName = process.env.DB_NAME

// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to the database.')
//     }
//     const db = client.db(databaseName)

    

// })