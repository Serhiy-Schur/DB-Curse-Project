const { createDatabase, feelDatabase } = require('./database')

// створення таблиць та наповнення інформацією
createDatabase()
  .then(feelDatabase)
    .then(console.log)
    .then(()=> process.exit(0))
    .catch((e) => console.error(e));


var mysql = require('mysql');

console.log('Get connection ...');

var conn = mysql.createConnection({
    database: 'kursach',
    host: "25.22.131.112",
    user: "sergo",
    password: "12345"
});

conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});