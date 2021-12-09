const knex = require('knex')({
    client:'pg',
    connection: {
        host:'localhost',
        user:'admin',
        password:'1q2w3e',
        database:'todoproject',
    },
})

var DB = require('bookshelf')(knex)

module.exports = {
    DB,
}