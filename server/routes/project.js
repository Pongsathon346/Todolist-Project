const route = require('express').Router()
const projectController = require('../controllers/project.Controller')

route.get('/show/:id', projectController.show)

route.post('/add', projectController.add)

route.delete('/delete/:id', projectController.delete)

module.exports = route