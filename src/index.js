require('dotenv').config()
require('./db/mongoose')
const express = require('express')
const cors = require('cors')

app.use(cors())

const userRouter = require('./routers/user')
const filmRouter = require('./routers/film')
const rankRouter = require('./routers/rank')
const viewStatusRouter = require('./routers/viewStatus')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/', function(req, res){
    res.sendFile(__dirname + '/endpoints.html');
    });
app.use(userRouter)
app.use(filmRouter)
app.use(rankRouter)
app.use(viewStatusRouter)

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})