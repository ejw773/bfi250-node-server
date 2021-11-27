require('dotenv').config()
const mongoose = require('mongoose')

const connectionString = process.env.MONGODB_URL + '/' + process.env.DB_NAME

mongoose.connect(connectionString, {
    useNewUrlParser: true
})
