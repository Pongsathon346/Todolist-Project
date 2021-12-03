const route = require('express').Router()
const user = require('./users')

route.use('/users', user)

// route.use('/todo')

module.exports = route