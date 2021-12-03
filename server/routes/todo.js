const route = require('express').Router()
const todoController = require('../controllers/todo.Controller')

route.get('/show/:projectid', todoController.show)

route.post('/add', todoController.add)

route.put('/updatedescription', todoController.updatedescription)

route.put('/updatestatus', todoController.updatestatus)

route.put('/updateduedate', todoController.updateduedate)

route.delete('/delete/:id', todoController.delete)

module.exports = route