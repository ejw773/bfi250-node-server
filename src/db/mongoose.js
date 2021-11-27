require('dotenv').config()
const mongoose = require('mongoose')

const connectionString = process.env.MONGODB_URL + '/' + process.env.DB_NAME

mongoose.connect(connectionString, {
    useNewUrlParser: true
})

const User = mongoose.model('User', {
    name: {
        type: String

    },
    age: {
        type: Number

    }
})

const me = new User({
    name: 'Elijah',
    age: 43
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error!', error)
})

