const { DB } = require('../config/database')

const User = DB.Model.extend({
    tableName: 'users'
})

module.exports = {
    User
}