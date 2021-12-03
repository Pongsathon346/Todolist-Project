const route = require('express').Router()
const user = require('./users')
const todo = require('./todo')
const project = require('./project')

route.use('/users', user)

route.use('/lists', todo)

route.use('/project', project)

module.exports = route