const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost', 
    user: 'root',      
    password: 'Dudul@10',      
    database: 'SchoolData'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL!');
});

module.exports = db;