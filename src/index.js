require('dotenv').config()
require('./db/mongoose')
const express = require('express')

const User = require('./models/user')
const Film = require('./models/film')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())



app.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.send(users)
    }).catch((e) => {
        res.status(500).send()
    })
})

app.get('/users/:id', (req, res) => {
    User.findById(req.params.id).then((user) => {
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    }).catch((e) => {
        res.status(500).send()
    })
})

app.post('/users', (req, res) => {
    const user = new User(req.body)
    user.save().then(() => {
        res.status(201).send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.get('/films', (req, res) => {
    Film.find({}).then((films) => {
        res.send(films)
    }).catch((e) => {
        res.status(500).send()
    })
})

app.get('/films/:id', (req, res) => {
    Film.findById(req.params.id).then((film) => {
        res.send(film)
    }).catch((e) => {
        res.status(500).send()
    })
})

app.get('/films/imdb/:imdbid', (req, res) => {
    console.log(req.params.imdbid)
    Film.find({ imdbID: req.params.imdbid }).then((films) => {
        res.send(films)
    }).catch((e) => {
        res.status(500).send()
    })
})

app.post('/films', (req, res) => {
    const film = new Film(req.body)
    film.save().then(() => {
        res.status(201).res.send(film)
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