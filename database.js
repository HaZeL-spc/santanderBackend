const mysql = require("mysql2")

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'kacper',
    password: '1234',
    database: 'santander'
})