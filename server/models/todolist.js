const { DB } = require('../config/database')

const Todolist = DB.Model.extend({
    tableName: 'todo_lists'
})

module.exports = {
    Todolist
}