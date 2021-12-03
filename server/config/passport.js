const passport = require('passport')
const BasicStrategy = require('passport-http').BasicStrategy
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const bcrypt = require('bcrypt')
const db = require('../config/database')



module.exports = () => {
    passport.use(passport.initialize())

    passport.use(new BasicStrategy((username, password, done) => {
        const sql = "SELECT * FROM users WHERE username = $1 LIMIT 1"
        db.query(sql, [username], (err, result) => {
            if(err) throw err
            
            if(result.rowCount === 0){
                done(null, false);
            }else {
                const userPassword = result.rows[0].password;
                if(!bcrypt.compareSync(password, userPassword)){
                    return done(null, {
                        error: true
                    })
                }else {
                    done(null, {
                        id: result.rows[0].id,
                        username: result.rows[0].username,
                    })
                }
            }
        })
    }));
}
