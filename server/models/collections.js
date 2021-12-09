const { DB } = require('../config/database')

const Todolist = DB.Model.extend({
    tableName: 'todo_lists'
})

const User = DB.Model.extend({
    tableName:'users'
})

module.exports = {
    Todolist,
    User
}