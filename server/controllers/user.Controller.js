const bcrypt = require('bcrypt')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const db = require('../config/database')

exports.reg = function (req, res) {
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email
    db.query('SELECT * FROM users WHERE (username = $1) OR (email = $2) LIMIT 1',[username, email], (err, result) => {
        if(err){
            throw err
        }else {
            if(result.rowCount === 1){
                if(result.rows[0].username === username){
                    return res.status(400).json({message:'Username is already in used'})
                }else{
                    return res.status(400).json({message:'Email is already in used'})
                }
            }else{
                const saltRound = 10 
                const salt = bcrypt.genSaltSync(saltRound)
                const hash = bcrypt.hashSync(password, salt)
                const sql = 'INSERT INTO users(username, password, email) VALUES ($1,$2,$3)'
                db.query(sql, [username, hash, email], (err, result) => {
                    if(err){
                        throw err
                    }else{
                        return res.status(200).json({message:'Register successfully'})
                    }
                })
            }
        }
    })
    
}

exports.login = function(req, res) {
    if(req.user.error){
        return res.status(400).json({
            message: 'Invalid username or password'
        })
    } else {
        const{username, id} = req.user;
        const token = jwt.sign({username, id}, 'userToken');
        return res.status(200).json({id, username, token})
    }
}