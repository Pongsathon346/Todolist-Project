const bookshelf = require('bookshelf')

const knex = require('knex')({
    client:'pg',
    connection: {
        host:'localhost',
        user:'admin',
        password:'1q2w3e',
        database:'todoproject',
    },
})

knex.schema.hasTable('users').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('users',(table)=>{
            console.log('create user');
            table.increments('id').primary()
            table.string('username')
            table.string('email')
            table.string('password')
        })
    }
})

knex.schema.hasTable('todo_lists').then(function(exists) {
    if (!exists) {
        return knex.schema.createTable('todo_lists',(table)=>{
            console.log('create todo');
            table.increments('todo_id').primary()
            table.string('todo_describ')
            table.string('todo_status')
            table.integer('user_id').references('id').inTable('users')
        })
    }
})

var DB = require('bookshelf')(knex)

module.exports = {
    DB,
}