require('dotenv').config()
require('./db/mongoose')
const express = require('express')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
const cors = require('cors')

const userRouter = require('./routers/user')
const filmRouter = require('./routers/film')
const rankRouter = require('./routers/rank')
const seenStatusRouter = require('./routers/seenStatus')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use(cors())

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(morgan('combined', { stream: accessLogStream }))

app.get('/', function(req, res){
    res.sendFile(__dirname + '/endpoints.html');
    });
app.get('/logs', function(req, res) {
    res.sendFile(__dirname + '/access.log')
})
app.use(userRouter)
app.use(filmRouter)
app.use(rankRouter)
app.use(seenStatusRouter)

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})