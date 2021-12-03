const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'admin',
    password: '1q2w3e',
    host: 'localhost',
    port: 5432,
    database: 'todoproject'
});

module.exports = pool;