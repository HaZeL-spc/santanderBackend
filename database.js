const mysql = require("mysql2")

const pool = mysql.createPool({
    host: 'bvjx9vxnnapywt8oi7oh-mysql.services.clever-cloud.com',
    user: 'utpprvmh23np6jwe',
    password: 'tcOqn2tDVFbd36xtj8o2',
    database: 'bvjx9vxnnapywt8oi7oh',
    waitForConnection: true,
    queueLimit: 0,
    connectionLimit: 10
})

pool = mysql.getConnection((err, conn) => {
    if (err) console.log(err);
    console.log("connected success");
})

module.exports = pool.promise();