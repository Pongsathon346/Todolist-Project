const route = require('express').Router()
const userController = require('../controllers/user.Controller')

route.post('/reg', userController.reg)

route.post('/login', userController.login)

module.exports = route