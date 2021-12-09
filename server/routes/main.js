const route = require('express').Router()

const user = require('./users')
const todo = require('./todo')

route.use('/users', user)

route.use('/lists', todo)

module.exports = route