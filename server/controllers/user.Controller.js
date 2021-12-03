const database = require('../config/database')

exports.reg = function(req, res) {
    console.log(req.body);
    return res.send('register')
}

exports.login = function(req, res) {
    console.log(req.body);
    return res.send('login')
}