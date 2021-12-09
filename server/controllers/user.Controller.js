const bcrypt = require('bcrypt')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const { User } = require('../models/collections')

exports.reg = async (req, res) => {
    const {username, password, email} = req.body
    try {
        let check = await User.where(function(){
            this.where('username',username).orWhere('email', email)
        }).fetch({require: true})
        return res.status(400).send('Username or Email is already in use!')
    } catch (e) {
        try {
            const saltRound = 10 
            const salt = bcrypt.genSaltSync(saltRound)
            const hash = bcrypt.hashSync(password, salt)
            let insert = await User.forge({
                username: username ,
                password: hash ,
                email: email
            }).save()
            return res.status(200).send('Register successfully')
        } catch (err) {
            
        }
    }


    // db.query('SELECT * FROM users WHERE (username = $1) OR (email = $2) LIMIT 1',[username, email], (err, result) => {
    //     if(err){
    //         throw err
    //     }else {
    //         if(result.rowCount === 1){
    //             if(result.rows[0].username === username){
    //                 return res.status(400).json({message:'Username is already in used'})
    //             }else{
    //                 return res.status(400).json({message:'Email is already in used'})
    //             }
    //         }else{
    //             const saltRound = 10 
    //             const salt = bcrypt.genSaltSync(saltRound)
    //             const hash = bcrypt.hashSync(password, salt)
    //             const sql = 'INSERT INTO users(username, password, email) VALUES ($1,$2,$3)'
    //             db.query(sql, [username, hash, email], (err, result) => {
    //                 if(err){
    //                     throw err
    //                 }else{
    //                     return res.status(200).json({message:'Register successfully'})
    //                 }
    //             })
    //         }
    //     }
    // })
    
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