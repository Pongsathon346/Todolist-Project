const route = require('express').Router()
const todoController = require('../controllers/todo.Controller')

route.get('/show/:id', todoController.show)

route.post('/add', todoController.add)

route.put('/updatestatus', todoController.updatestatus)

route.delete('/delete/:id', todoController.delete)

module.exports = route