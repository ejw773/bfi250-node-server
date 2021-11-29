require('dotenv').config()
require('./db/mongoose')
const express = require('express')

const userRouter = require('./routers/user')

const Film = require('./models/film')
const Rank = require('./models/rank')
const ViewStatus = require('./models/viewStatus')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use(userRouter)



// FILMS
// Get all films
app.get('/films', (req, res) => {
    Film.find({}).then((films) => {
        res.send(films)
    }).catch((e) => {
        res.status(500).send()
    })
})

// Get one film by database ID
app.get('/films/:id', (req, res) => {
    Film.findById(req.params.id).then((film) => {
        res.send(film)
    }).catch((e) => {
        res.status(500).send()
    })
})

// Get one film by imdbID
app.get('/films/imdb/:imdbid', (req, res) => {
    console.log(req.params.imdbid)
    Film.find({ imdbID: req.params.imdbid }).then((film) => {
        res.send(film)
    }).catch((e) => {
        res.status(500).send()
    })
})

// Add new film
app.post('/films', (req, res) => {
    const film = new Film(req.body)
    film.save().then((film) => {
        res.status(201)
        res.send(film)
    }).catch((e) => {
        res.status(400)
        res.end(`Failed to save: ${e}`)
    })
})


// RANKS
// Get all ranks
app.get('/ranks', (req, res) => {
    Rank.find({})
    .populate('film')
    .then((ranks) => {
        res.send(ranks)
    }).catch((e) => {
        res.status(400)
        res.send(e)
    })
})

// Get ranks by year
app.get('/ranks/:bfiSet', (req, res) => {
    console.log(req.params.bfiSet)
    Rank.find({ bfiSet: req.params.bfiSet })
    .populate('film')
    .then((ranks) => {
        res.send(ranks)
    }).catch((e) => {
        res.status(400)
        res.send(e)
    })
})

app.get('/ranks/imdb/:imdbID', (req, res) => {
    console.log(req.params.imdbID)
    Rank.find({ imdbID: req.params.imdbID })
    .populate('film')
    .then((ranks) => {
        res.send(ranks)
    }).catch((e) => {
        res.status(400)
        res.send(e)
    })
})


// VIEWSTATUS
// Read ALL status
app.get('/viewstatus', (req, res) => {
    res.send('get all the view status information')
})

// Post one status
app.post('/viewstatus', (req, res) => {
    const viewStatus = new ViewStatus({})
    res.send(`Posting ${req.body.viewStatus} for film ${req.body.film} for user ${req.body.user}`)
})

// Nullify one status
app.delete('/viewstatus', (req, res) => {
    res.send(`Nullifying ${req.body.film} for user ${req.body.user}`)
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})
