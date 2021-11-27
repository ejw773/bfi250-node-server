require('dotenv').config()
const bfi1962 = require('./mongodb/filmSeeders/1962')

console.log(process.env.MONGODB_URL)
console.log(bfi1962)