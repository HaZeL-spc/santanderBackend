const mysql = require("mysql2")

// module.exports = mysql.createConnection({
//     host: 'bvjx9vxnnapywt8oi7oh-mysql.services.clever-cloud.com',
//     user: 'utpprvmh23np6jwe',
//     password: 'tcOqn2tDVFbd36xtj8o2',
//     database: 'bvjx9vxnnapywt8oi7oh',
//     port: 3306
// })

module.exports = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME,
    port: 3306
})