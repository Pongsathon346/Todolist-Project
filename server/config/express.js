const express = require('express')
const passport = require('passport')
const main = require('../routes/main')
const app = express()
const cors = require('cors')

module.exports = () => {
    app.use(express.json())
    app.use(express.urlencoded({extended: false}))
    app.use(cors())

    app.use('/auth', main)

    const listen = (port) => {
        app.listen(port , () => {
            console.log(`Server is running on ${port}`);
        })
    }

    return {listen}
}

