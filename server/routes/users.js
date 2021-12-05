const route = require('express').Router()
const passport = require('passport')
const userController = require('../controllers/user.Controller')

route.post('/reg', userController.reg)

route.post('/login', passport.authenticate('basic', {session: false}), userController.login)

module.exports = route